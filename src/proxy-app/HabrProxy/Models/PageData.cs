using System.Text.Json.Serialization;

namespace HabrProxy.Models;

public class PageData
{
    [JsonPropertyName("pagesCount")]
    public int PagesCount { get; set; }

    [JsonPropertyName("articleIds")]
    public string[]? ArticleIds { get; set; }

    [JsonPropertyName("articleRefs")]
    public dynamic? ArticleRefs { get; set; }
}
