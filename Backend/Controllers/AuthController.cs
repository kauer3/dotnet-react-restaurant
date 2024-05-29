using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Dtos;
using Backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
  [ApiController, Route("[controller]/[action]")]
  public class AuthController : ControllerBase
  {
    private readonly AuthService _authService;

    public AuthController(AuthService authService)
    {
      _authService = authService;
    }
    
    [HttpPost]
    public ActionResult<LoginResponse> Login(LoginRequest request)
    {
      var response = _authService.Login(request);
      return new JsonResult(response);
    }
  }
}