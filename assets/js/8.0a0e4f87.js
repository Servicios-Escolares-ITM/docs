(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{729:function(t,e,i){"use strict";i.r(e);var a=i(70),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"modulo-de-enfemeria"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#modulo-de-enfemeria"}},[t._v("#")]),t._v(" Módulo de Enfemería")]),t._v(" "),i("p",[t._v("API para el manejo de medicamentos y expendientes del área de Enfemeria del ITM")]),t._v(" "),i("h2",{attrs:{id:"diccionario-de-datos"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#diccionario-de-datos"}},[t._v("#")]),t._v(" Diccionario de datos")]),t._v(" "),i("h3",{attrs:{id:"medicamento"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#medicamento"}},[t._v("#")]),t._v(" Medicamento")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("Campo")]),t._v(" "),i("th",{staticStyle:{"text-align":"center"}},[t._v("Tipo de dato")]),t._v(" "),i("th",{staticStyle:{"text-align":"left"}},[t._v("Descripción")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[i("strong",[t._v("id")])]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("code",[t._v("uuid")])]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Identificador único")])]),t._v(" "),i("tr",[i("td",[i("strong",[t._v("description")])]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("code",[t._v("string")])]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Descripción")])]),t._v(" "),i("tr",[i("td",[i("strong",[t._v("substance")])]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("code",[t._v("string")])]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Sustancia activa")])]),t._v(" "),i("tr",[i("td",[i("strong",[t._v("common_name")])]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("code",[t._v("string")])]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Nombre convencional")])]),t._v(" "),i("tr",[i("td",[i("strong",[t._v("expiriation_date")])]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("code",[t._v("date")])]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Fecha caducidad")])]),t._v(" "),i("tr",[i("td",[i("strong",[t._v("unit_price")])]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("code",[t._v("float")])]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Costo unitario")])]),t._v(" "),i("tr",[i("td",[i("strong",[t._v("package_price")])]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("code",[t._v("float")])]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Costo total")])]),t._v(" "),i("tr",[i("td",[i("strong",[t._v("lote")])]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("code",[t._v("integer")])]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Lote")])]),t._v(" "),i("tr",[i("td",[i("strong",[t._v("stock")])]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("code",[t._v("integer")])]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Stock")])]),t._v(" "),i("tr",[i("td",[i("strong",[t._v("items_per_paq")])]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("code",[t._v("integer")])]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Cantidad por paquete")])]),t._v(" "),i("tr",[i("td",[i("strong",[t._v("presentation")])]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("code",[t._v("string")])]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Presentación")])]),t._v(" "),i("tr",[i("td",[i("strong",[t._v("dosis")])]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("code",[t._v("string")])]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Dosis por presentación")])]),t._v(" "),i("tr",[i("td",[i("strong",[t._v("created_at")])]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("code",[t._v("datetime")])]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Fecha de creación")])])])]),t._v(" "),i("h2",{attrs:{id:"endpoints"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#endpoints"}},[t._v("#")]),t._v(" Endpoints")]),t._v(" "),i("ul",[i("li",[i("p",[i("strong",[t._v("GET")]),t._v(" /api/medicines/ Listado medicamentos registrados en la base de datos.")]),t._v(" "),i("ul",[i("li",[t._v("Retornar todos los campos de Medicine.")]),t._v(" "),i("li",[t._v("Busqueda por descripcion y sustancia activa.")]),t._v(" "),i("li",[t._v("Todos los campos deben poder filtrarse.")]),t._v(" "),i("li",[t._v("Todos los campos deben poder ordenarse")]),t._v(" "),i("li",[t._v("Orden por defecto por fecha de creación ("),i("code",[t._v("created_at")]),t._v(")")])])]),t._v(" "),i("li",[i("p",[i("strong",[t._v("GET")]),t._v(" /api/medicines/{id}/ Obtener información de un medicamento")]),t._v(" "),i("ul",[i("li",[t._v("Debe incluir todos los campos")])])]),t._v(" "),i("li",[i("p",[i("strong",[t._v("POST")]),t._v(" /api/medicines/ Crear un medicamento")]),t._v(" "),i("ul",[i("li",[t._v("Solo si el usuario pertenece al grupo "),i("code",[t._v("Nursing")])])])]),t._v(" "),i("li",[i("p",[i("strong",[t._v("PATCH")]),t._v(" /api/medicines/{id} Actualizar información un medicamento")]),t._v(" "),i("ul",[i("li",[t._v("Solo si el usuario pertenece al grupo "),i("code",[t._v("Nursing")])])])]),t._v(" "),i("li",[i("p",[i("strong",[t._v("DELETE")]),t._v(" /api/medicines/{id} Eliminar usuario")]),t._v(" "),i("ul",[i("li",[t._v("Solo si el usuario pertenece al grupo "),i("code",[t._v("Nursing")])])])])])])}),[],!1,null,null,null);e.default=n.exports}}]);