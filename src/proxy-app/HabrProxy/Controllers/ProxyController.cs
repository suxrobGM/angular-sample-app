using Microsoft.AspNetCore.Mvc;
using AspNetCore.Proxy;
using AspNetCore.Proxy.Options;
using HabrProxy.Services;

namespace HabrProxy.Controllers;

[ApiController]
public class ProxyController : ControllerBase
{
    private readonly HttpProxyOptions _httpOptions;

    public ProxyController(IResponseHandler responseHandler)
    {
        _httpOptions = HttpProxyOptionsBuilder.Instance
            .WithHttpClientName("ProxyHttpClient")
            .WithAfterReceive((ctx, rm) => responseHandler.HandleAsync(ctx, rm))
            .Build();
    }

    [HttpGet("auth/{**path}", Order = 1)]
    public Task GetAuth(string? path)
    {
        return this.HttpProxyAsync($"https://habr.com/auth/{path}", _httpOptions);
    }

    [HttpGet("assets-habr/{**path}", Order = 1)]
    public Task GetAssets(string? path)
    {
        return this.HttpProxyAsync($"https://assets.habr.com/{path}");
    }

    [HttpGet("api-init-habr/{**path}", Order = 1)]
    public Task GetApiInit(string? path)
    {
        return this.HttpProxyAsync($"https://api.int.habr.com/{path}");
    }

    [HttpGet("effect-habr/{**path}", Order = 1)]
    public Task GetEffect(string? path)
    {
        return this.HttpProxyAsync($"https://effect.habr.com/{path}");
    }

    [HttpGet("embedd-srv-habr/{**path}", Order = 1)]
    public Task GetEmbeddSrv(string? path)
    {
        return this.HttpProxyAsync($"https://embedd.srv.habr.com/{path}");
    }

    [HttpGet("career-habr/{**path}", Order = 1)]
    public Task GetCareer(string? path)
    {
        return this.HttpProxyAsync($"https://career.habr.com/{path}");
    }

    [HttpGet("qna-habr/{**path}", Order = 1)]
    public Task GetQna(string? path)
    {
        return this.HttpProxyAsync($"https://qna.habr.com/{path}");
    }

    [HttpGet("account-habr/{**path}", Order = 1)]
    public Task GetAccount(string? path)
    {
        return this.HttpProxyAsync($"https://account.habr.com/{path}");
    }

    [HttpGet("company-habr/{**path}", Order = 1)]
    public Task GetCompany(string? path)
    {
        return this.HttpProxyAsync($"https://company.habr.com/{path}");
    }

    [HttpGet("freelance-habr/{**path}", Order = 1)]
    public Task GetFreelance(string? path)
    {
        return this.HttpProxyAsync($"https://freelance.habr.com/{path}");
    }

    [HttpGet("tmtm/{**path}", Order = 1)]
    public Task GetTmtm(string? path)
    {
        return this.HttpProxyAsync($"https://tmtm.ru/{path}");
    }

    [HttpGet("contenting/{**path}", Order = 1)]
    public Task GetContenting(string? path)
    {
        return this.HttpProxyAsync($"https://contenting.io/{path}");
    }

    [HttpGet("google/{**path}", Order = 1)]
    public Task GetGoogle(string? path)
    {
        var query = HttpContext.Request.QueryString;
        return this.HttpProxyAsync($"https://www.google.com/{path}{query}");
    }

    [HttpGet("googletagmanager/{**path}", Order = 1)]
    public Task GetGoogleTagManager(string? path)
    {
        var query = HttpContext.Request.QueryString;
        return this.HttpProxyAsync($"https://www.googletagmanager.com/{path}{query}");
    }

    [HttpGet("yandex/{**path}", Order = 1)]
    public Task GetYandex(string? path)
    {
        var query = HttpContext.Request.QueryString;
        return this.HttpProxyAsync($"https://yandex.ru/{path}{query}");
    }

    [HttpGet("mc-yandex/{**path}", Order = 1)]
    public Task GetMcYandex(string? path)
    {
        var query = HttpContext.Request.QueryString;
        return this.HttpProxyAsync($"https://mc.yandex.ru/{path}{query}");
    }

    [HttpGet("js/chunk-vendors.9df20697.js", Order = 2)]
    public IActionResult GetChunksJsFile()
    {
        return File($"/js/chunk-vendors.9df20697.js", "application/javascript");
    }

    [HttpGet("js/app.f7fdce84.js", Order = 2)]
    public IActionResult GetAppJsFile()
    {
        return File($"/js/app.f7fdce84.js", "application/javascript");
    }

    [HttpGet("m-habr/{**path}", Order = 2)]
    public Task GetMobile(string? path)
    {
        var query = HttpContext.Request.QueryString;
        return this.ProxyAsync($"https://m.habr.com/{path}{query}", $"ws://habr.com/{path}{query}", _httpOptions);
    }

    [HttpPost("kek/{**path}", Order = 2)]
    public Task PostKek(string? path)
    {
        var query = HttpContext.Request.QueryString;
        return this.HttpProxyAsync($"https://habr.com/kek/{path}{query}", _httpOptions);
    }

    [HttpGet("kek/{**path}", Order = 2)]
    public Task GetKek(string? path)
    {
        var query = HttpContext.Request.QueryString;
        return this.HttpProxyAsync($"https://habr.com/kek/{path}{query}", _httpOptions);
    }

    [HttpGet("{**path}", Order = 3)]
    public Task GetAll(string? path)
    {
        var query = HttpContext.Request.QueryString;
        return this.ProxyAsync($"https://habr.com/{path}{query}", $"ws://habr.com/{path}{query}", _httpOptions);
    }
}