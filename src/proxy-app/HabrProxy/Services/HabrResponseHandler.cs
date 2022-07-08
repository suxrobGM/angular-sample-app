using System.Text;
using System.Text.Json;
using HabrProxy.Models;
using HtmlAgilityPack;

namespace HabrProxy.Services;

public class HabrResponseHandler : IResponseHandler
{
    public async Task HandleAsync(HttpContext ctx, HttpResponseMessage response)
    {
        if (!response.IsSuccessStatusCode)
        {
            return;
        }

        if (ctx.Request.Path == "/auth/checklogin/")
        {
            response.Content.Headers.ContentType!.MediaType = "application/x-javascript";
            return;
        }

        var content = await response.Content.ReadAsStringAsync();

        if (IsContentOfType(response, "application/json"))
        {
            response.Content = ModifyJsonData(content);
        }
        else if (IsContentOfType(response, "text/html"))
        {
            response.Content = ModifyHtmlContent(content);
        }
    }

    private static StringContent ModifyHtmlContent(string htmlContent)
    {
        htmlContent = htmlContent.Replace("https://habr.com", "/")
                        .Replace("https://assets.habr.com", "/assets-habr")
                        .Replace("https://www.googletagmanager.com", "/googletagmanager")
                        .Replace("https://mc.yandex.ru", "/mc-yandex")
                        .Replace("https://yandex.ru", "/yandex")
                        .Replace("src=\"/assets-habr/habr-web/js/chunk-vendors.9df20697.js\"", "src=\"/js/chunk-vendors.9df20697.js\"")
                        .Replace("href=\"/assets-habr/habr-web/js/chunk-vendors.9df20697.js\"", "src=\"/js/chunk-vendors.9df20697.js\"")
                        .Replace("src=\"/assets-habr/habr-web/js/app.f7fdce84.js\"", "src=\"/js/app.f7fdce84.js\"")
                        .Replace("href=\"/assets-habr/habr-web/js/app.f7fdce84.js\"", "src=\"/js/app.f7fdce84.js\"");

        var doc = new HtmlDocument();
        doc.LoadHtml(htmlContent);
        var body = doc.DocumentNode.SelectSingleNode("//div[@id='app']");

        if (body == null)
            throw new InvalidOperationException("Body element is null");

        var nodes = body.Descendants();

        foreach (var node in nodes)
        {
            if (node is HtmlTextNode textNode)
            {
                textNode.Text = AppendText(textNode.Text, "™");
            }
        }

        using var writer = new StringWriter();
        doc.Save(writer);

        return new StringContent(writer.ToString(), Encoding.UTF8, "text/html");
    }

    private static StringContent ModifyJsonData(string jsonContent)
    {
        try
        {
            var pageData = JsonSerializer.Deserialize<PageData>(jsonContent);
            var jsonDoc = JsonDocument.Parse(jsonContent);
            jsonDoc.RootElement.TryGetProperty("articleRefs", out var articleRefs);

            if (pageData?.ArticleIds != null)
            {
                foreach (var articleId in pageData.ArticleIds)
                {
                    if (!articleRefs.TryGetProperty(articleId, out var articleObj))
                    {
                        continue;
                    }

                    var article = articleObj.Deserialize<Article>();

                    if (article == null)
                    {
                        continue;
                    }

                    article.TitleHtml = AppendText(article.TitleHtml, "aaaaaa™");

                    if (article?.Author != null)
                    {
                        article.Author.FullName = AppendText(article.Author.FullName, "™");
                        article.Author.Speciality = AppendText(article.Author.Speciality, "™");
                    }

                    if (article?.LeadData != null)
                    {
                        article.LeadData.TextHtml = AppendText(article.LeadData.TextHtml, "™");
                    }
                }
            }

            var serializedContent = JsonSerializer.Serialize(pageData);
            return new StringContent(serializedContent, Encoding.UTF8, "application/json");
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex.ToString());
            return new StringContent("{}", Encoding.UTF8, "application/json");
        }
    }

    private static string AppendText(string? text, string textToAppend)
    {
        if (string.IsNullOrEmpty(text))
        {
            return string.Empty;
        }

        var words = text.Trim().Split(" ");
        var sb = new StringBuilder();

        foreach (var word in words)
        {
            if (word.Length >= 6)
            {
                sb.Append($"{word}{textToAppend} ");
            }
            else
            {
                sb.Append($"{word} ");
            }
        }

        return sb.ToString();
    }

    private static bool IsContentOfType(HttpResponseMessage rm, string type)
    {
        return Equals(rm.Content.Headers.ContentType?.MediaType, type);
    }
}
