namespace HabrProxy.Services;

public interface IResponseHandler
{
    Task HandleAsync(HttpContext ctx, HttpResponseMessage response);
}
