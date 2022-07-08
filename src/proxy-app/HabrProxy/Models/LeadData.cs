using System.Text.Json.Serialization;

namespace HabrProxy.Models;

public class LeadData
{
    [JsonPropertyName("textHtml")]
    public string? TextHtml { get; set; }
}
