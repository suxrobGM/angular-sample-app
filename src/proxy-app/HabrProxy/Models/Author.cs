using System.Text.Json.Serialization;

namespace HabrProxy.Models;

public class Author
{
    [JsonPropertyName("fullname")]
    public string? FullName { get; set; }

    [JsonPropertyName("speciality")]
    public string? Speciality { get; set; }
}
