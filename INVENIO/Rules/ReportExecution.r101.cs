using System;
using System.Data;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Web;
using System.Web.Security;
using INVENIO.Data;
using INVENIO.Models;
using System.IO;

namespace INVENIO.Rules
{
	public partial class ReportExecutionBusinessRules : INVENIO.Rules.SharedBusinessRules
    {
        
        /// <summary>
        /// This method will execute in any view for an action
        /// with a command name that matches "DownloadFile" and argument that matches "ExternalDoc".
        /// </summary>
        [Rule("r101")]
        public void r101Implementation(ReportExecutionModel instance)
        {
            // This is the placeholder for method implementation.
            PreventDefault();
            string nombre = "";
            nombre = string.Concat("upload_test_", instance.IDExecution);
            string fileName = Path.Combine(
                Environment.GetFolderPath(Environment.SpecialFolder.MyDocuments),
                String.Format(@"C:\Users\Administrator\Documents\detalle_tpp\{0}.xls", nombre));
            Stream input = File.OpenRead(fileName);
            //input.CopyTo(externalDoc);
            input.Close();
        }
    }
}
