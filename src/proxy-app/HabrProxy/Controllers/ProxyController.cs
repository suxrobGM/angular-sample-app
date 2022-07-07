using Microsoft.AspNetCore.Mvc;
using AspNetCore.Proxy;
using AspNetCore.Proxy.Options;
using HabrProxy.Services;

namespace HabrProxy.Controllers;

[ApiController]
public class ProxyController : ControllerBase
{
    private readonly HttpProxyOptions _httpOptions = HttpProxyOptionsBuilder.Instance
        .WithHttpClientName("ProxyHttpClient")
        .WithAfterReceive((ctx, rm) => new HabrResponseHandler().HandleAsync(ctx, rm))
        .Build();

    [HttpGet("assets-habr/{**query}", Order = 1)]
    public Task GetAssets(string? query)
    {
        return this.HttpProxyAsync($"https://assets.habr.com/{query}");
    }

    [HttpGet("api-init-habr/{**query}", Order = 1)]
    public Task GetApiInit(string? query)
    {
        return this.HttpProxyAsync($"https://api.int.habr.com/{query}");
    }

    [HttpGet("effect-habr/{**query}", Order = 1)]
    public Task GetEffect(string? query)
    {
        return this.HttpProxyAsync($"https://effect.habr.com/{query}");
    }

    [HttpGet("embedd-srv-habr/{**query}", Order = 1)]
    public Task GetEmbeddSrv(string? query)
    {
        return this.HttpProxyAsync($"https://embedd.srv.habr.com/{query}");
    }

    [HttpGet("career-habr/{**query}", Order = 1)]
    public Task GetCareer(string? query)
    {
        return this.HttpProxyAsync($"https://career.habr.com/{query}");
    }

    [HttpGet("qna-habr/{**query}", Order = 1)]
    public Task GetQna(string? query)
    {
        return this.HttpProxyAsync($"https://qna.habr.com/{query}");
    }

    [HttpGet("account-habr/{**query}", Order = 1)]
    public Task GetAccount(string? query)
    {
        return this.HttpProxyAsync($"https://account.habr.com/{query}");
    }

    [HttpGet("company-habr/{**query}", Order = 1)]
    public Task GetCompany(string? query)
    {
        return this.HttpProxyAsync($"https://company.habr.com/{query}");
    }

    [HttpGet("freelance-habr/{**query}", Order = 1)]
    public Task GetFreelance(string? query)
    {
        return this.HttpProxyAsync($"https://freelance.habr.com/{query}");
    }

    [HttpGet("tmtm/{**query}", Order = 1)]
    public Task GetTmtm(string? query)
    {
        return this.HttpProxyAsync($"https://tmtm.ru/{query}");
    }

    [HttpGet("contenting/{**query}", Order = 1)]
    public Task GetContenting(string? query)
    {
        return this.HttpProxyAsync($"https://contenting.io/{query}");
    }

    [HttpGet("google/{**query}", Order = 1)]
    public Task GetGoogle(string? query)
    {
        return this.HttpProxyAsync($"https://www.google.com/{query}");
    }

    [HttpGet("googletagmanager/{**query}", Order = 1)]
    public Task GetGoogleTagManager(string? query)
    {
        return this.HttpProxyAsync($"https://www.googletagmanager.com/{query}");
    }

    [HttpGet("yandex/{**query}", Order = 1)]
    public Task GetYandex(string? query)
    {
        return this.HttpProxyAsync($"https://yandex.ru/{query}");
    }

    [HttpGet("mc-yandex/{**query}", Order = 1)]
    public Task GetMcYandex(string? query)
    {
        return this.HttpProxyAsync($"https://mc.yandex.ru/{query}");
    }

    [HttpGet("js/chunk-vendors.9df20697.js", Order = 2)]
    public IActionResult GetChunksJsFile()
    {
        return File($"/js/chunk-vendors.9df20697.js", "application/javascript");
    }

    [HttpGet("{**query}", Order = 3)]
    public Task Get(string? query)
    {
        return this.ProxyAsync($"https://habr.com/{query}", $"ws://habr.com/{query}", _httpOptions);
    }
}