using System.Text.Json;
using System.Text.Json.Serialization;

namespace HabrProxy.Models;

public class Article
{
    [JsonPropertyName("titleHtml")]
    public string? TitleHtml { get; set; }
}
