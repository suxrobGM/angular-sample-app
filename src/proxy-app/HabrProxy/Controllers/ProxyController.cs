using System.Text;
using Microsoft.AspNetCore.Mvc;
using AspNetCore.Proxy;
using AspNetCore.Proxy.Options;
using HtmlAgilityPack;

namespace HabrProxy.Controllers;

[ApiController]
public class ProxyController : ControllerBase
{
    private readonly HttpProxyOptions _httpOptions = HttpProxyOptionsBuilder.Instance
        .WithHttpClientName("ProxyHttpClient")
        .WithAfterReceive(HandleResponseContent)
        .Build();

    [HttpGet("/assets-habr/{**query}", Order = 1)]
    public Task GetAssets(string? query)
    {
        return this.HttpProxyAsync($"https://assets.habr.com/{query}");
    }

    [HttpGet("/js/{**path}", Order = 2)]
    public IActionResult GetJsFile(string? path)
    {
        return File($"/js/{path}", "application/javascript");
    }

    [HttpGet("/{**query}", Order = 3)]
    public Task Get(string? query)
    {
        return this.ProxyAsync($"https://habr.com/{query}", $"ws://habr.com/{query}", _httpOptions);
    }

    private static async Task HandleResponseContent(HttpContext ctx, HttpResponseMessage rm)
    {
        if (!IsContentOfType(rm, "text/html"))
        {
            return;
        }

        var content = await rm.Content.ReadAsStringAsync();

        content = content.Replace("https://habr.com", "/")
                        .Replace("https://assets.habr.com", "/assets-habr")
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
        rm.Content = new StringContent(writer.ToString(), Encoding.UTF8, "text/html");
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