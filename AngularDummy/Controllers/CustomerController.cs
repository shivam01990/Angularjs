using BusinessLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Mvc;
using DataLayer;
using Newtonsoft;
using Newtonsoft.Json.Linq;
using System.Web.Script.Serialization;
using System.Text;



namespace AngularDummy.Controllers
{
    public class CustomerController : ApiController
    {

        //public HttpResponseMessage Get()
        //{
        //    var jsonSerialiser = new JavaScriptSerializer();
        //    string jsons = jsonSerialiser.Serialize(CustomerServices.GetAllCustomer());
        //    var response = this.Request.CreateResponse(HttpStatusCode.OK);
        //    response.Content = new StringContent(jsons, Encoding.UTF8, "application/json");
        //    return response;
        //    //return new HttpResponseMessage()
        //    //{

        //    //    Content = new JsonContent(json);
        //    //};

        //}

        public List<tbl_customers> Get()
        {
            return CustomerServices.GetAllCustomer();
        }

        //// GET api/customer
        //public IEnumerable<string> Get()
        //{
        //    return new string[] { "value1", "value2" };
        //}

        // GET api/customer/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/customer
        public void Post([FromBody]string value)
        {
        }

        // PUT api/customer/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/customer/5
        public void Delete(int id)
        {
        }
    }
}
