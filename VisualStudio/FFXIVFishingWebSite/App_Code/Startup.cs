using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(FFXIVFishingWebSite.Startup))]
namespace FFXIVFishingWebSite
{
    public partial class Startup {
        public void Configuration(IAppBuilder app) {
            ConfigureAuth(app);
        }
    }
}
