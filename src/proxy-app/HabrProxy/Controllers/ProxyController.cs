using System.Net.Http.Headers;
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

    [HttpGet("{**query}")]
    public Task Get(string? query)
    {
        return this.HttpProxyAsync($"https://habr.com/{query}", _httpOptions);
    }

    private static async Task HandleResponseContent(HttpContext ctx, HttpResponseMessage rm)
    {
        var htmlContentType = MediaTypeHeaderValue.Parse("text/html; charset=utf-8");

        if (!Equals(rm.Content.Headers.ContentType, htmlContentType))
        {
            return;
        }

        var content = await rm.Content.ReadAsStringAsync();

        var doc = new HtmlDocument();
        doc.LoadHtml(content);
        var body = doc.DocumentNode.SelectSingleNode("//div[@id='app']");
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
}