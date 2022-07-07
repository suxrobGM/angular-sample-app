using System.Text;
using HtmlAgilityPack;

namespace HabrProxy.Services;

public class HabrResponseHandler : IResponseHandler
{
    public async Task HandleAsync(HttpContext ctx, HttpResponseMessage response)
    {
        if (!IsContentOfType(response, "text/html"))
        {
            return;
        }

        var content = await response.Content.ReadAsStringAsync();

        content = content.Replace("https://habr.com", "/")
                        .Replace("https://assets.habr.com", "/assets-habr")
                        .Replace("https://www.googletagmanager.com", "/googletagmanager")
                        .Replace("https://mc.yandex.ru", "/mc-yandex")
                        .Replace("https://yandex.ru", "/yandex")
                        .Replace("src=\"/assets-habr/habr-web/js/chunk-vendors.9df20697.js\"", "src=\"/js/chunk-vendors.9df20697.js\"");

        var doc = new HtmlDocument();
        doc.LoadHtml(content);
        var body = doc.DocumentNode.SelectSingleNode("//div[@id='app']");

        if (body == null)
            return;

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

        // Sets modified html content
        response.Content = new StringContent(writer.ToString(), Encoding.UTF8, "text/html");
    }

    private static string AppendText(string text, string textToAppend)
    {
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
