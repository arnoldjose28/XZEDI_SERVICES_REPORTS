using System;
using System.Data;
using System.Collections.Generic;
using System.Linq;
using INVENIO.Data;

namespace INVENIO.Models
{
	public partial class ReportExecutionModel : BusinessRulesObjectModel
    {
        
        [System.Diagnostics.DebuggerBrowsable(System.Diagnostics.DebuggerBrowsableState.Never)]
        private int? _iDExecution;
        
        [System.Diagnostics.DebuggerBrowsable(System.Diagnostics.DebuggerBrowsableState.Never)]
        private string _processDescription;
        
        [System.Diagnostics.DebuggerBrowsable(System.Diagnostics.DebuggerBrowsableState.Never)]
        private double? _iDReport;
        
        [System.Diagnostics.DebuggerBrowsable(System.Diagnostics.DebuggerBrowsableState.Never)]
        private string _nameReport;
        
        [System.Diagnostics.DebuggerBrowsable(System.Diagnostics.DebuggerBrowsableState.Never)]
        private DateTime? _firsDayProcess;
        
        [System.Diagnostics.DebuggerBrowsable(System.Diagnostics.DebuggerBrowsableState.Never)]
        private string _user;
        
        [System.Diagnostics.DebuggerBrowsable(System.Diagnostics.DebuggerBrowsableState.Never)]
        private DateTime? _createdAt;
        
        [System.Diagnostics.DebuggerBrowsable(System.Diagnostics.DebuggerBrowsableState.Never)]
        private DateTime? _lastDayProcess;
        
        public ReportExecutionModel()
        {
        }
        
        public ReportExecutionModel(BusinessRules r) : 
                base(r)
        {
        }
        
        public int? IDExecution
        {
            get
            {
                return _iDExecution;
            }
            set
            {
                _iDExecution = value;
                UpdateFieldValue("IDExecution", value);
            }
        }
        
        public string ProcessDescription
        {
            get
            {
                return _processDescription;
            }
            set
            {
                _processDescription = value;
                UpdateFieldValue("ProcessDescription", value);
            }
        }
        
        public double? IDReport
        {
            get
            {
                return _iDReport;
            }
            set
            {
                _iDReport = value;
                UpdateFieldValue("IDReport", value);
            }
        }
        
        public string NameReport
        {
            get
            {
                return _nameReport;
            }
            set
            {
                _nameReport = value;
                UpdateFieldValue("NameReport", value);
            }
        }
        
        public DateTime? FirsDayProcess
        {
            get
            {
                return _firsDayProcess;
            }
            set
            {
                _firsDayProcess = value;
                UpdateFieldValue("FirsDayProcess", value);
            }
        }
        
        public string User
        {
            get
            {
                return _user;
            }
            set
            {
                _user = value;
                UpdateFieldValue("User", value);
            }
        }
        
        public DateTime? CreatedAt
        {
            get
            {
                return _createdAt;
            }
            set
            {
                _createdAt = value;
                UpdateFieldValue("CreatedAt", value);
            }
        }
        
        public DateTime? LastDayProcess
        {
            get
            {
                return _lastDayProcess;
            }
            set
            {
                _lastDayProcess = value;
                UpdateFieldValue("LastDayProcess", value);
            }
        }
    }
}
