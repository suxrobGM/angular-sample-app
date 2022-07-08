using System.Text.Json.Serialization;

namespace HabrProxy.Models;

public class Article
{
    [JsonPropertyName("titleHtml")]
    public string? TitleHtml { get; set; }

    [JsonPropertyName("author")]
    public Author? Author { get; set; }

    [JsonPropertyName("leadData")]
    public LeadData? LeadData { get; set; }
}
