
/*!
* Data Aquarium Framework - Resources
* Copyright 2008-2018 Code On Time LLC; Licensed MIT; http://codeontime.com/license
*/
(function () {
    Type.registerNamespace('Web');

    var _dvr = Web.DataViewResources = {};

    _dvr.Common = {
        WaitHtml: '<div class="Wait"></div>'
    };

    _dvr.Pager = {
        ItemsPerPage: 'Agregar por Item:',
        PageSizes: [10, 15, 20, 25],
        ShowingItems: 'Mostrando \u003cb\u003e{0}\u003c/b\u003e-\u003cb\u003e{1}\u003c/b\u003e de \u003cb\u003e{2}\u003c/b\u003e Registros en total',
        SelectionInfo: ' (<b>{0}</b> selected)',
        Refresh: 'Refrescar',
        Next: 'Siguiente »',
        Previous: '« Anterior',
        Page: 'Folio',
        PageButtonCount: 10
    };

    _dvr.ActionBar = {
        View: 'Ver'
    };

    _dvr.ModalPopup = {
        Close: 'Cerrar',
        MaxWidth: 800,
        MaxHeight: 600,
        OkButton: 'Aceptar',
        CancelButton: 'Cancelar',
        SaveButton: 'Guardar',
        SaveAndNewButton: 'Guardar y Nuevo'
    };

    _dvr.Menu = {
        SiteActions: 'Acciones',
        SeeAlso: 'Datos Relacionados',
        Summary: 'Resumen',
        Tasks: 'Tareas',
        About: 'Acerca'
    };

    _dvr.HeaderFilter = {
        GenericSortAscending: 'Ascendente',
        GenericSortDescending: 'Descendente',
        StringSortAscending: 'Ascendente',
        StringSortDescending: 'Descendente',
        DateSortAscending: 'Ascendente',
        DateSortDescending: 'Descendente',
        EmptyValue: '(Ninguno)',
        BlankValue: '(En blanco)',
        Loading: 'Cargando ...',
        ClearFilter: 'Borrar filtro de {0}',
        SortBy: 'Ordenar por {0}',
        MaxSampleTextLen: 80,
        CustomFilterOption: 'Filtro ...'
    };

    _dvr.InfoBar = {
        FilterApplied: 'Se ha aplicado un filtro.',
        ValueIs: ' <span class="Highlight">{0}</span> ',
        Or: ' o ',
        And: ' y ',
        EqualTo: 'es igual a ',
        LessThan: 'es menor que ',
        LessThanOrEqual: 'es menor o igual a ',
        GreaterThan: 'es mayor que ',
        GreaterThanOrEqual: 'es mayor o igual a ',
        Like: 'es como ',
        StartsWith: 'comienza con ',
        Empty: 'Ninguno',
        QuickFind: ' Cualquier campo contiene '
    };

    _dvr.Lookup = {
        SelectToolTip: 'Seleccione {0}',
        ClearToolTip: 'Borrar {0}',
        NewToolTip: 'Agregar {0}',
        SelectLink: '(Seleccionar)',
        ShowActionBar: true,
        DetailsToolTip: 'Ver detalles de \u003cb\u003e{0}\u003c/b\u003e',
        ShowDetailsInPopup: true,
        GenericNewToolTip: 'Agregar',
        AddItem: 'Agregar registro'
    };

    _dvr.Validator = {
        Required: 'Necesario',
        RequiredField: 'Este campo es obligatorio.',
        EnforceRequiredFieldsWithDefaultValue: false,
        NumberIsExpected: 'Se requiere un numero.',
        BooleanIsExpected: 'Se requiere un valor creible.',
        DateIsExpected: 'Se espera una fecha.',
        Optional: 'Opcional'
    };

    var _mn = Sys.CultureInfo.CurrentCulture.dateTimeFormat.MonthNames;

    _dvr.Data = {
        ConnectionLost: 'El ingreso a la red se ha perdido. Pruebe de nuevo?',
        AnyValue: '(alguna)',
        NullValue: '<span class="NA">n/a</span>',
        NullValueInForms: 'N/A',
        BooleanDefaultStyle: 'DropDownList',
        BooleanOptionalDefaultItems: [[null, 'N/A'], [false, 'No'], [true, 'OK']],
        BooleanDefaultItems: [[false, 'No'], [true, 'OK']],
        MaxReadOnlyStringLen: 600,
        NoRecords: 'No se han encontrado.',
        BlobHandler: 'Blob.ashx',
        BlobDownloadLink: 'descargar',
        BlobDownloadLinkReadOnly: '<span style="color:gray;">descargar</span>',
        BlobDownloadHint: 'Haga clic para descargar el archivo original.',
        BlobDownloadOriginalHint: 'Toca la imagen para descargar el archivo original.',
        BatchUpdate: 'actualizar',
        NoteEditLabel: 'editar',
        NoteDeleteLabel: 'borrar',
        NoteDeleteConfirm: 'Borrar?',
        UseLEV: 'Pega \"{0}\"',
        DiscardChanges: 'Descartar los cambios?',
        Import: {
            UploadInstruction: 'Por favor, seleccione el archivo a subir. El archivo debe estar en formato \u003cb\u003eCSV\u003c/b\u003e, \u003cb\u003eXLS\u003c/b\u003e o \u003cb\u003eXLSX\u003c/b\u003e.',
            DownloadTemplate: 'Descargar plantilla de importaci�n de archivos.',
            Uploading: 'Su archivo esta siendo cargado en el servidor. Por favor espere ...',
            MappingInstruction: 'Hay \u003cb\u003e{0}\u003c/b\u003e (s) registro(s) en el archivo \u003cb\u003e{1}\u003c/b\u003e listo(s) para ser procesados.\u003cbr/\u003ePor favor asigne los campos de importaci�n del archivo de datos a los campos correspondientes en la aplicaci�n y haga clic en \u003ci\u003eImportar\u003c/i\u003e para iniciar el procesamiento.',
            StartButton: 'Importar',
            AutoDetect: '(Detecci�n autom�tica)',
            Processing: 'El proceso de importar los archivos se ha iniciado. El registro de importar los datos se reflejara tras el procesamiento exitoso. Es posible que tenga que actualizar los puntos de vista o las p�ginas relevantes para ver los registros importados.',
            Email: 'Enviar registro de importaci�n a los siguientes correos (opcional)',
            EmailNotSpecified: 'Destinatario del registro de importaci�n no ha sido especificado. Continuar de todos modos?'
        },
        Filters: {
            Labels: {
                And: 'y',
                Or: 'o',
                Equals: 'es igual a',
                Clear: 'Borrar',
                SelectAll: '(Seleccionar todo)',
                Includes: 'incluye',
                FilterToolTip: 'Cambio'
            },
            Number: {
                Text: 'Filtros de numeros',
                Kind: 'Numero',
                List: [
                    { Function: '=', Text: 'Es igual a', Prompt: true },
                    { Function: '<>', Text: 'No es igual a', Prompt: true },
                    { Function: '<', Text: 'Menor que', Prompt: true },
                    { Function: '>', Text: 'Mayor que', Prompt: true },
                    { Function: '<=', Text: 'Menor o igual que', Prompt: true },
                    { Function: '>=', Text: 'Mayor o igual que', Prompt: true },
                    { Function: '$between', Text: 'Entre', Prompt: true },
                    { Function: '$in', Text: 'Incluye', Prompt: true, Hidden: true },
                    { Function: '$notin', Text: 'No incluye', Prompt: true, Hidden: true },
                    { Function: '$isnotempty', Text: 'No Empty' },
                    { Function: '$isempty', Text: 'Ninguno' }
                ]
            },
            Text: {
                Text: 'Filtros de texto',
                Kind: 'Texto',
                List: [
                    { Function: '=', Text: 'Es igual a', Prompt: true },
                    { Function: '<>', Text: 'No es igual a', Prompt: true },
                    { Function: '$beginswith', Text: 'Comienza con', Prompt: true },
                    { Function: '$doesnotbeginwith', Text: 'No comienza con', Prompt: true },
                    { Function: '$contains', Text: 'Contiene', Prompt: true },
                    { Function: '$doesnotcontain', Text: 'No contiene', Prompt: true },
                    { Function: '$endswith', Text: 'Termina con', Prompt: true },
                    { Function: '$doesnotendwith', Text: 'No termina con', Prompt: true },
                    { Function: '$in', Text: 'Incluye', Prompt: true, Hidden: true },
                    { Function: '$notin', Text: 'No incluye', Prompt: true, Hidden: true },
                    { Function: '$isnotempty', Text: 'No Empty' },
                    { Function: '$isempty', Text: 'Ninguno' }
                ]
            },
            Boolean: {
                Text: 'Filtros',
                Kind: 'Razonable',
                List: [
                    { Function: '$true', Text: 'OK' },
                    { Function: '$false', Text: 'No' },
                    { Function: '$isnotempty', Text: 'No Empty' },
                    { Function: '$isempty', Text: 'Ninguno' }
                ]
            },
            Date: {
                Text: 'Filtros de fecha',
                Kind: 'Fecha',
                List: [
                    { Function: '=', Text: 'Es igual a', Prompt: true },
                    { Function: '<>', Text: 'No es igual a', Prompt: true },
                    { Function: '<', Text: 'Antes de', Prompt: true },
                    { Function: '>', Text: 'Siguiente de', Prompt: true },
                    { Function: '<=', Text: 'El o antes', Prompt: true },
                    { Function: '>=', Text: 'El o siguiente', Prompt: true },
                    { Function: '$between', Text: 'Entre', Prompt: true },
                    { Function: '$in', Text: 'Incluye', Prompt: true, Hidden: true },
                    { Function: '$notin', Text: 'No incluye', Prompt: true, Hidden: true },
                    { Function: '$isnotempty', Text: 'No Empty' },
                    { Function: '$isempty', Text: 'Ninguno' },
                    null,
                    { Function: '$tomorrow', Text: 'Ma�ana' },
                    { Function: '$today', Text: 'Hoy' },
                    { Function: '$yesterday', Text: 'Ayer' },
                    null,
                    { Function: '$nextweek', Text: 'La siguiente semana' },
                    { Function: '$thisweek', Text: 'Esta Semana' },
                    { Function: '$lastweek', Text: 'Semana pasada' },
                    null,
                    { Function: '$nextmonth', Text: 'El siguiente mes' },
                    { Function: '$thismonth', Text: 'Este Mes' },
                    { Function: '$lastmonth', Text: 'Mes pasado' },
                    null,
                    { Function: '$nextquarter', Text: 'El siguiente trimestre' },
                    { Function: '$thisquarter', Text: 'Este Trimestre' },
                    { Function: '$lastquarter', Text: 'Fin trimestre' },
                    null,
                    { Function: '$nextyear', Text: 'El siguiente periodo' },
                    { Function: '$thisyear', Text: 'Este Periodo' },
                    { Function: '$yeartodate', Text: 'Periodo a la Fecha' },
                    { Function: '$lastyear', Text: 'El periodo pasado' },
                    null,
                    { Function: '$past', Text: 'Pasado' },
                    { Function: '$future', Text: 'Futuro' },
                    null,
                    {
                        Text: 'Todas las fechas de esta etapa',
                        List: [
                            { Function: '$quarter1', Text: '1er trimestre' },
                            { Function: '$quarter2', Text: '2do trimestre' },
                            { Function: '$quarter3', Text: '3er trimestre' },
                            { Function: '$quarter4', Text: '4to trimestre' },
                            null,
                            { Function: '$month1', Text: _mn[0] },
                            { Function: '$month2', Text: _mn[1] },
                            { Function: '$month3', Text: _mn[2] },
                            { Function: '$month4', Text: _mn[3] },
                            { Function: '$month5', Text: _mn[4] },
                            { Function: '$month6', Text: _mn[5] },
                            { Function: '$month7', Text: _mn[6] },
                            { Function: '$month8', Text: _mn[7] },
                            { Function: '$month9', Text: _mn[8] },
                            { Function: '$month10', Text: _mn[9] },
                            { Function: '$month11', Text: _mn[10] },
                            { Function: '$month12', Text: _mn[11] }
                        ]
                    }
            ]
            }
        }
    };


    _dvr.Form = {
        ShowActionBar: true,
        ShowCalendarButton: true,
        RequiredFieldMarker: '<span class="Required">*</span>',
        RequiredFiledMarkerFootnote: '* - indica un campo obligatorio',
        SingleButtonRowFieldLimit: 7,
        GeneralTabText: 'General',
        Minimize: 'Minimizar',
        Maximize: 'Maximizar'
    };

    _dvr.Grid = {
        InPlaceEditContextMenuEnabled: true,
        QuickFindText: 'Filtro acelerado',
        QuickFindToolTip: 'Escriba lo que usted quiera buscar y pulse Enter',
        ShowAdvancedSearch: 'Mostrar Filtro Avanzado',
        VisibleSearchBarFields: 3,
        DeleteSearchBarField: '(Borrar)',
        //AddSearchBarField: 'Nuevos campos de filtros',
        HideAdvancedSearch: 'Ocultar filtro Avanzado',
        PerformAdvancedSearch: 'Filtro',
        ResetAdvancedSearch: 'Resetear',
        NewRowLink: 'Haga clic para agregar un registro nuevo.',
        RootNodeText: 'Nivel superior',
        FlatTreeToggle: 'Cambiar a arbol',
        HierarchyTreeModeToggle: 'Cambiar a Lista simple',
        AddConditionText: 'Agregar filtro de opciones',
        AddCondition: 'Agregar filtro',
        RemoveCondition: 'Quitar estado',
        ActionColumnHeaderText: 'Acciones',
        Aggregates: {
            None: { FmtStr: '', ToolTip: '' },
            Sum: { FmtStr: 'Suma: {0}', ToolTip: 'Suma de {0}' },
            Count: { FmtStr: 'Conteo: {0}', ToolTip: 'Conteo de {0}' },
            Avg: { FmtStr: 'Promedio: {0}', ToolTip: 'Promedio de {0}' },
            Max: { FmtStr: 'Max: {0}', ToolTip: 'Mayor de {0}' },
            Min: { FmtStr: 'Min: {0}', ToolTip: 'Menor de {0}' }
        },
        Freeze: 'Congelar',
        Unfreeze: 'Descongelar'
    };

    _dvr.Views = {
        DefaultDescriptions: {
            '$DefaultGridViewDescription': 'Esta es la lista de \u003cb\u003e{0}\u003c/b\u003e.',
            '$DefaultEditViewDescription': 'Por favor revise los datos de \u003cb\u003e{0}\u003c/b\u003e en seguida. Haga clic en \u003cb\u003eEditar\u003c/b\u003e para cambiar este registro, haga clic en \u003cb\u003eBorrar\u003c/b\u003e para eliminar el registro, o haga clic en \u003cb\u003eCancelar/Cerrar\u003c/b\u003e para volver a la vista anterior.',
            '$DefaultCreateViewDescription': 'Por favor, llene este formato y haga clic en \u003cb\u003eAceptar\u003c/b\u003e para crear un registro nuevo de \u003cb\u003e{0}\u003c/b\u003e. Haga clic en \u003cb\u003eCancelar\u003c/b\u003e para volver a la pantalla anterior.'
        },
        DefaultCategoryDescriptions: {
            '$DefaultEditDescription': 'Estos son los campos del registro de \u003cb\u003e{0}\u003c/b\u003e que se pueden editar.',
            '$DefaultNewDescription': 'Llene el formato en seguida. Verifique ingresar todos los campos obligatorios.',
            '$DefaultReferenceDescription': 'La parte de datos de referencia muestra detalles adicionales de \u003cb\u003e{0}\u003c/b\u003e.'
        }
    };

    _dvr.Actions = {
        Scopes: {
            'Grid': {
                'Select': {
                    HeaderText: 'Seleccionar'
                },
                'Edit': {
                    HeaderText: 'Editar'
                },
                'Delete': {
                    HeaderText: 'Borrar',
                    Confirmation: 'Borrar?',
                    Notify: '{$ selected} eliminado'
                },
                'Duplicate': {
                    HeaderText: 'Duplicar'
                },
                'New': {
                    HeaderText: 'Agregar'
                },
                'BatchEdit': {
                    HeaderText: 'Editar por lotes'
                    //                    ,CommandArgument: {
                    //                        'editForm1': {
                    //                            HeaderText: 'Editar por lotes (formato)'
                    //                        }
                    //                    }
                },
                'Open': {
                    HeaderText: 'Abrir'
                }
            },
            'Form': {
                'Edit': {
                    HeaderText: 'Editar'
                },
                'Delete': {
                    HeaderText: 'Borrar',
                    Confirmation: 'Borrar?',
                    Notify: '{$ selected} eliminado'
                },
                'Cancel': {
                    HeaderText: 'Cancelar',
                    WhenLastCommandName: {
                        'Duplicate': {
                            HeaderText: 'Cancelar'
                        },
                        'Edit': {
                            HeaderText: 'Cancelar'
                        },
                        'New': {
                            HeaderText: 'Cancelar'
                        }

                    }
                },
                'Update': {
                    HeaderText: 'Aceptar',
                    Notify: 'Guardado - {0}',
                    CommandArgument: {
                        'Save': {
                            HeaderText: 'Guardar',
                            Notify: 'Guardado - {0}'
                        }
                    },
                    WhenLastCommandName: {
                        'BatchEdit': {
                            HeaderText: 'Actualizar la preferencia',
                            Confirmation: 'Actualizar?',
                            Notify: 'Guardado - {0}'
                        }
                    }
                },
                'Insert': {
                    HeaderText: 'Aceptar',
                    Notify: 'Guardado - {0}',
                    CommandArgument: {
                        'Save': {
                            HeaderText: 'Guardar',
                            Notify: 'Guardado - {0}'
                        },
                        'SaveAndNew': {
                            HeaderText: 'Guardar y Nuevo',
                            Notify: 'Guardado - {0}'
                        }
                    }
                },
                'Confirm': {
                    HeaderText: 'Aceptar'
                },
                'Navigate': {
                    Controller: {
                        'SiteContent': {
                            HeaderText: 'Agregar Sistema de Identidad'
                        }
                    }
                }
            },
            'ActionBar': {
                _Self: {
                    'Actions': {
                        HeaderText: 'Acciones'
                    },
                    'Report': {
                        HeaderText: 'Reporte'
                    },
                    'Record': {
                        HeaderText: 'Registro'
                    }
                },
                'New': {
                    HeaderText: 'Agregar {0}',
                    Description: 'Crear un registro nuevo de {0}.',
                    HeaderText2: 'Agregar',
                    VarMaxLen: 15
                },
                'Edit': {
                    HeaderText: 'Editar'
                },
                'Delete': {
                    HeaderText: 'Borrar',
                    Confirmation: 'Borrar?',
                    Notify: '{$ selected} eliminado'
                },
                'ExportCsv': {
                    HeaderText: 'Descargar',
                    Description: 'Descargar elementos en formato CSV.'
                },
                'ExportRowset': {
                    HeaderText: 'Exportar a excel',
                    Description: 'Analizar los elementos con un programa \u003cbr/\u003ede excel.'
                },
                'ExportRss': {
                    HeaderText: 'Exportar a RSS',
                    Description: 'Distribuir los elementos con un lector de RSS.'
                },
                'Import': {
                    HeaderText: 'Importar desde archivo',
                    Description: 'Subir un archivo CSV, XLS, XLSX con registros para\u003cbr/\u003eimportar.'
                },
                'Update': {
                    HeaderText: 'Guardar',
                    Description: 'Guardar los cambios en la base de datos.',
                    Notify: 'Guardado - {0}'
                },
                'Insert': {
                    HeaderText: 'Guardar',
                    Description: 'Guardar nuevo registro a la base de datos.',
                    Notify: 'Guardado - {0}'
                },
                'Cancel': {
                    HeaderText: 'Cancelar',
                    WhenLastCommandName: {
                        'Edit': {
                            HeaderText: 'Cancelar',
                            Description: 'Cancelar todos los cambios de registro.'
                        },
                        'New': {
                            HeaderText: 'Cancelar',
                            Description: 'Cancelar nuevo registro.'
                        }
                    }
                },
                'Report': {
                    HeaderText: 'Reporte',
                    Description: 'Generar un reporte en formato PDF'
                },
                'ReportAsPdf': {
                    HeaderText: 'Documento PDF',
                    Description: 'Ver Agregado como documento de Adobe PDF.\u003cbr/\u003eVa a necesitar un lector compatible.'
                },
                'ReportAsImage': {
                    HeaderText: 'Imagen de varias p�ginas',
                    Description: 'Ver Agregado como una imagen TIFF de varias p�ginas.'
                },
                'ReportAsExcel': {
                    HeaderText: 'Archivo excel',
                    Description: 'Ver los elementos en una archivo excel en formato \u003cbr/\u003ede Microsoft Excel.'
                },
                'ReportAsWord': {
                    HeaderText: 'Microsoft Word',
                    Description: 'Ver los elementos en un documento fromateado \u003cbr/\u003een Microsoft Word.'
                },
                'DataSheet': {
                    HeaderText: 'Mostrar el archivo excel',
                    Description: 'Elementos de la pantalla utilizando un formato de excel.'
                },
                'Grid': {
                    HeaderText: 'Mostrar en vista basico',
                    Description: 'Elementos de la pantalla en formato de tabla\u003cbr/\u003ebasica.'
                },
                'Tree': {
                    HeaderText: 'Mostrar el arbol',
                    Description: 'Mostrar las relaciones jer�rquicas.'
                },
                'Search': {
                    HeaderText: 'Filtro',
                    Description: 'Filtro {0}'
                }
            },
            'Row': {
                'Update': {
                    HeaderText: 'Grabar',
                    Notify: 'Guardado - {0}',
                    WhenLastCommandName: {
                        'BatchEdit': {
                            HeaderText: 'Actualizando la preferencia',
                            Confirmation: 'Actualizar?'
                        }
                    }
                },
                'Insert': {
                    HeaderText: 'Insertar',
                    Notify: 'Guardado - {0}'
                },
                'Cancel': {
                    HeaderText: 'Cancelar'
                }
            },
            'ActionColumn': {
                'Edit': {
                    HeaderText: 'Editar'
                },
                'Delete': {
                    HeaderText: 'Borrar',
                    Confirmation: 'Borrar?',
                    Notify: '{$ selected} eliminado'
                }
            }
        }
    };

    _dvr.Editor = {
        Undo: 'Deshacer',
        Redo: 'Rehacer',
        Bold: 'Audaz',
        Italic: 'It�lico',
        Underline: 'Subrayar',
        Strikethrough: 'Tachado',
        Subscript: 'Sub Gui�n',
        Superscript: 'S�per Gui�n',
        JustifyLeft: 'Justificar a la izquierda',
        JustifyCenter: 'Justificar Center',
        JustifyRight: 'Justificar a la derecha',
        JustifyFull: 'Justificar completa',
        InsertOrderedList: 'Inserte lista ordenada',
        InsertUnorderedList: 'Insertar Lista sin ordenar',
        CreateLink: 'Crear enlace',
        UnLink: 'Desvincular',
        RemoveFormat: 'Eliminar el formato',
        SelectAll: 'Seleccionar todo',
        UnSelect: 'Anular la preferencia',
        Delete: 'Borrar',
        Cut: 'Cortar',
        Copy: 'Copiar',
        Paste: 'Pegar',
        BackColor: 'Color de fondo',
        ForeColor: 'Color Fore',
        FontName: 'Nombre de la fuente',
        FontSize: 'Rango de la letra',
        Indent: 'Sangrar',
        Outdent: 'Anular sangr�a',
        InsertHorizontalRule: 'Insertar regla horizontal',
        HorizontalSeparator: 'Separador',
        Format: 'Formato',
        FormatBlock: {
            p: 'Parrafo',
            blockquote: 'Cotizar',
            h1: 'R�brica 1',
            h2: 'R�brica 2',
            h3: 'R�brica 3',
            h4: 'R�brica 4',
            h5: 'R�brica 5',
            h6: 'R�brica 6'
        },
        Rtf: {
            editor: 'Pantalla completa'
        }
    };

    _dvr.Mobile = {
        UpOneLevel: 'Subir un nivel',
        Back: 'Regresar',
        BatchEdited: '{0} actualizado',
        Sort: 'Ordenar',
        Sorted: 'Ordenado',
        SortedDefault: 'Orden de lista predeterminado',
        SortByField: 'Seleccionar un campo para cambiar el orden de lista de \u003cb\u003e{0}\u003c/b\u003e.',
        SortByOptions: 'Seleccione el orden de lista de \u003cb\u003e{0}\u003c/b\u003e por el campo \u003cb\u003e{1}\u003c/b\u003e en la siguiente lista de opciones.',
        DefaultOption: 'Original',
        Auto: 'Auto',
        Filter: 'Filtro',
        List: 'Lista',
        Cards: 'Tarjetas',
        Grid: 'Tabla',
        Map: 'Mapa',
        Calendar: 'Calendario',
        ZoomIn: 'Zoom in',
        ZoomOut: 'Alejamiento',
        Directions: 'Instrucciones',
        AlternativeView: 'Seleccione una vista alternativa de los datos.',
        PresentationStyle: 'Seleccione un estilo de vista de los datos.',
        LookupViewAction: 'Ver',
        LookupSelectAction: 'Seleccionar',
        LookupClearAction: 'Borrar',
        LookupNewAction: 'Agregar',
        LookupInstruction: 'Por favor seleccione \u003cb\u003e{0}\u003c/b\u003e en la lista.',
        LookupOriginalSelection: 'La preferencia original es \u003cb\u003e \u0026quot;{0}\u0026quot; \u003c/b\u003e.',
        EmptyContext: 'Las acciones no se encuentran disponibles.',
        Favorites: 'Favoritos',
        History: 'Historia',
        FilterSiteMap: 'Mapa del sitio filtro ...',
        ResumeLookup: 'Reanudar filtro',
        ResumeEntering: 'Reanudar Introducciones',
        ResumeEditing: 'Reanudar ediciones',
        ResumeBrowsing: 'Reanudar sitio',
        ResumeViewing: 'Reanudar la Vista',
        Menu: 'Lista',
        Home: 'Casa',
        Settings: 'Configuraciones',
        Sidebar: 'Barra lateral',
        Landscape: 'Paisaje',
        Portrait: 'Retrato',
        Never: 'Nunca',
        Always: 'Siempre',
        ShowSystemButtons: 'Mostrar botones del sistema',
        OnHover: 'en la libraci�n',
        ButtonShapes: 'Formas de los botones',
        PromoteActions: 'Promover acciones',
        ConfirmReload: 'Actualizar?',
        ClearText: 'Borrar Text',
        SeeAll: 'Ver Todos',
        More: 'Agregar',
        TouchUINotSupported: 'Touch UI no se admite en este navegador.',
        ShowingItemsInfo: 'Mostrando {0} Registros.',
        FilterByField: 'Seleccione un campo para aplicar un filtro a \u003cb\u003e{0}\u003c/b\u003e.',
        Apply: 'Aplicar',
        FilterByOptions: 'Seleccione una o varias opciones en la siguiente lista y pulse \u003cb\u003e{2}\u003c/b\u003e para filtrar \u003cb\u003e{0}\u003c/b\u003e por el campo \u003cb\u003e{1}\u003c/b\u003e.',
        Suggestions: 'Sugerencias',
        UnSelect: 'Anular la preferencia',
        AdvancedSearch: 'Filtro Avanzada',
        QuickFindScope: 'Buscar en ...',
        AddMatchingGroup: 'Agregar grupo a juego',
        MatchAll: 'Coincidir con todas las condiciones',
        MatchAny: 'Coincide cualquier condiciones',
        DoNotMatchAll: 'No coinciden todas las condiciones',
        DoNotMatchAny: 'No se han encontrado condiciones',
        MatchAllPastTense: 'Igualados todas las condiciones',
        MatchAnyPastTense: 'Emparejado cualquier estado',
        DoNotMatchAllPastTense: 'No se han encontrado todas las condiciones',
        DoNotMatchAnyPastTense: 'No se han encontrado condiciones',
        In: 'en',
        Recent: 'Reciente',
        Matched: 'Igualados',
        DidNotMatch: 'No se han encontrado',
        ClearFilter: 'Borrar filtro',
        ResetSearchConfirm: 'Restablecer las condiciones de filtro?',
        FilterCleared: 'Se borraron todos los filtros.',
        AdvancedSearchInstruction: 'Introduzca condiciones que deben ser igualados y pulse el item de filtro.',
        Refreshed: 'Refrescado',
        Group: 'Grupo',
        Grouped: 'Agrupado',
        UnGrouped: 'Grupo ha sido eliminado',
        GroupedBy: 'Dividido por',
        GroupByField: 'Seleccione un campo de grupo \u003cb\u003e{0}\u003c/b\u003e.',
        Show: 'Espect�culo',
        Hide: 'Esconder',
        None: 'Ninguno',
        Next: 'Siguiente',
        Prev: 'Anterior',
        FitToWidth: 'Ajustar al ancho',
        MultiSelection: 'Preferencias varias',
        InlineEditing: 'Editar ahora',
        ItemsSelectedOne: '{0} Elemento seleccionado',
        ItemsSelectedMany: '{0} elementos seleccionados',
        TypeToSearch: 'Escribe para buscar',
        NoMatches: 'No hay coincidencias.',
        ShowingItemsRange: 'Mostrando {0} {1} de Registros',
        Finish: 'Terminar',
        ShowOptions: 'Mostrar opciones',
        ConfirmContinue: 'Continuar?',
        AddAccount: 'Agregar cuenta',
        Fullscreen: 'Pantalla completa',
        ExitFullscreen: 'Salir de pantalla completa',
        Apps: 'aplicaciones',
        Forget: 'Olvidar',
        ManageAccounts: 'Cuentas administrativas',
        SignedOut: 'Cerrando',
        Submit: 'Enviar',
        Error: 'Error',
        Line: 'Fila',
        Download: 'Descargar',
        Orientation: 'Orientar',
        Device: 'Dispositivo',
        ShowMore: 'Mostrar (+)',
        ShowLess: 'Muestra menos',
        WithSpecifiedFilters: 'Con filtros especificados',
        WithSelectedValues5: 'Con Valores Seleccionados (Top 5)',
        WithSelectedValues10: 'Con Valores Seleccionados (Top 10)',
        ReadOnly: '{0} es de solo lectura.',
        InlineCommands: {
            List: {
                Select: 'Select Item',
                Edit: 'IEditar Item',
                New: 'Nuevo registro',
                Duplicate: 'Item duplicado',
            },
            Grid: {
                Select: 'Select Row',
                Edit: 'Editar Fila',
                New: 'Nueva fila',
                Duplicate: 'Fila duplicada',
            }
        },
        DisplayDensity: {
            Label: 'Display Density',
            List: {
                Tiny: 'Diminuto',
                Condensed: 'Condensado',
                Compact: 'Compacto',
                Comfortable: 'Confortable'
            }
        },
        Files: {
            KB: 'KB',
            MB: 'KB',
            Bytes: 'bytes',
            Drop: 'Baja de un archivo',
            DropMany: 'Suelte archivos',
            Tap: 'Toque para seleccionar un archivo',
            TapMany: 'Pulse para seleccionar archivos',
            Click: 'Haga clic para seleccionar un archivo',
            ClickMany: 'Haga clic para seleccionar los archivos',
            Clear: 'Claro',
            ClearConfirm: 'Claro?',
            Sign: 'Registrarse'
        },
        Import: {
            SelectFile: 'Seleccione un archivo de datos en formato CSV, XLS o XLSX.',
            NotSupported: 'Formato de datos de \u0026quot;{0}\u0026quot; no es compatible.',
            NotMatched: '(no coinciden)',
            FileStats: 'Existen registros \u003cb\u003e{0}\u003c/b\u003e en el archivo \u003cb\u003e{1}\u003c/b\u003e lista para ser procesada. Por favor coincidir con los nombres de los campos.',
            Importing: 'Importador',
            Into: 'dentro',
            StartImport: 'Iniciar importaciones',
            InsertingRecords: 'Ingreso de registros',
            TestingRecords: 'registros de las pruebas',
            ResolvingReferences: 'resolver las referencias',
            Complete: 'completar',
            Expected: 'Se espera que completar',
            Remaining: 'Se espera que completar',
            Done: ' importaci�n completado',
            Duplicates: 'duplicados'
        },
        Themes: {
            Label: 'Tema',
            Accent: 'Acento',
            List: {
                None: 'Ninguna',
                Light: 'Luz',
                Dark: 'Oscuro',
                Aquarium: 'Acuario',
                Azure: 'Azur',
                Belltown: 'Belltown',
                Berry: 'Baya',
                Bittersweet: 'Agridulce',
                Cay: 'Cay',
                Citrus: 'Agrios',
                Classic: 'Cl�sico',
                Construct: 'Construir',
                Convention: 'Convenciones',
                DarkKnight: 'Dark Knight',
                Felt: 'Sentido',
                Graham: 'Graham',
                Granite: 'Granito',
                Grapello: 'Grapello',
                Gravity: 'Gravedad',
                Lacquer: 'Laca',
                Laminate: 'Laminado',
                Lichen: 'Liquen',
                Mission: 'Encargo',
                Modern: 'Moderno',
                ModernRose: 'Rose Modern',
                Municipal: 'Municipal',
                Petal: 'P�talo',
                Pinnate: 'Pinada',
                Plastic: 'Plastico',
                Ricasso: 'Ricasso',
                Simple: 'Simple',
                Social: 'Social',
                Summer: 'Verano',
                Vantage: 'Ventaja',
                Verdant: 'Verde',
                Viewpoint: 'Punto de vista',
                WhiteSmoke: 'Humo Blanco',
                Yoshi: 'Yoshi'
            }
        },
        Transitions: {
            Label: 'Transiciones',
            List: {
                none: 'Ninguno',
                slide: 'Diapositiva',
                fade: 'Descolorarse',
                pop: 'M�sica pop',
                flip: 'Capirotazo',
                turn: 'Turno',
                flow: 'Flujo',
                slideup: 'Deslizar arriba',
                slidedown: 'Deslice hacia abajo'
            }
        },
        LabelsInList: {
            Label: 'Etiquetas en la lista',
            List: {
                DisplayedAbove: 'Aparece por encima de',
                DisplayedBelow: 'Se muestran en seguida'
            }
        },
        InitialListMode: {
            Label: 'Modo Lista Inicial',
            List: {
                SeeAll: 'Ver Todos',
                Summary: 'Resumen'
            }
        },
        Dates: {
            SmartDates: 'Fechas inteligentes',
            Yesterday: 'ayer',
            Last: 'Final',
            Today: 'hoy',
            OneHour: 'hace una hora',
            MinAgo: 'Hace {0} min',
            AMinAgo: 'hace un minuto',
            InHour: 'dentro de una hora',
            InMin: 'en {0} min',
            InAMin: 'en un minuto',
            Now: 'ahora',
            JustNow: 'Justo ahora',
            Tomorrow: 'ma�ana',
            Next: 'Siguiente'
        },
        Develop: {
            Tools: 'Herramientas de desarrollo',
            Explorer: 'Explorador de proyectos',
            FormLayout: 'Vista del formulario',
            FormLayoutInstr: 'Seleccione el rango de pantalla que se insertaran en el vista.'
        }
    };

    _dvr.Device = {
        Exit: 'Salida',
        DeviceLoginPrompt: 'Inicie para autorizar el acceso en este dispositivo.'
    };

    _dvr.Presenters = {
        Charts: {
            Text: 'Estadistica',
            DataWarning: 'La cantidad mayor de elementos de proceso es {0: d}. Haga clic para filtrar el resultado.',
            ShowData: 'Mostrar datos',
            ShowChart: 'Mostrar estadistica',
            Sizes: {
                Label: 'Tama�o',
                Small: 'Diminuto',
                Medium: 'Medio',
                Large: 'Grande'
            },
            ChartLabels: {
                By: 'por',
                Top: 'superior',
                Other: 'Otro',
                Blank: 'En blanco',
                GrandTotals: 'Grandes totales',
                CountOf: 'Contar',
                SumOf: 'Suma de',
                AvgOf: 'Promedio de',
                MinOf: 'Menor de',
                MaxOf: 'Mayor de',
                Quarter: 'Trimestre',
                Week: 'Semana'
            }
        },
        Calendar: {
            Text: 'Calendario',
            Today: 'Hoy',
            Noon: 'Mediodia',
            Year: 'Periodo',
            Month: 'Mes',
            Week: 'Semana',
            Day: 'D�a',
            Agenda: 'Agenda',
            Sync: 'Sincronizar',
            Less: 'Menos'
        }
    };

    // membership resources

    var _mr = Web.MembershipResources = {};

    _mr.Bar = {
        LoginLink: 'Ingresar',
        LoginText: ' a este sitio web',
        HelpLink: 'Ayuda',
        UserName: 'Nombre de usuario:',
        Password: 'clave:',
        RememberMe: 'Recordarme la siguiente vez',
        ForgotPassword: 'Olvido su clave?',
        SignUp: 'Registrarse ahora',
        LoginButton: 'Ingresar',
        MyAccount: 'Mi Cuenta',
        LogoutLink: 'Cerrar',
        HelpCloseButton: 'Cerrar',
        HelpFullScreenButton: 'Pantalla completa',
        UserIdle: 'Sigues en el sitio? Por favor, ingrese de nuevo.',
        History: 'Historia',
        Permalink: 'Enlace permanente',
        AddToFavorites: 'Agregar a mis favoritos',
        RotateHistory: 'Girar',
        Welcome: 'Hola <b>{0}</b>, Hoy es {1:D}',
        ChangeLanguageToolTip: 'Cambiar la lengua',
        PermalinkToolTip: 'Crear un enlace permanente de registro seleccionado',
        HistoryToolTip: 'Ver la historia de los registros previamente seleccionados',
        AutoDetectLanguageOption: 'Auto Detect'
    };

    _mr.Messages = {
        InvalidUserNameAndPassword: 'Su nombre de usuario y clave no son correctos.',
        BlankUserName: 'El nombre de usuario no puede estar en blanco.',
        BlankPassword: 'La clave no puede estar en blanco.',
        PermalinkUnavailable: 'El enlace permanente no se encuentra disponible. Por favor, seleccione un registro.',
        HistoryUnavailable: 'La historia no se encuentra disponible.'
    };

    _mr.Manager = {
        UsersTab: 'Usuarios',
        RolesTab: 'Funciones',
        UsersInRole: 'Usuarios en Papel'
    };

    if (typeof Sys !== 'undefined') Sys.Application.notifyScriptLoaded();
})();