/* =====================================================================
   CONFIGURACIÓN — App de labores de ARÁNDANO.
   Aquí se cambian fincas, lotes, operarios, líder y labores.
   meta = rendimiento esperado POR HORA efectiva (null = sin meta aún).
   ===================================================================== */
const CONFIG = {
  EMPRESA: "Mil Colinas",
  TITULO: "🫐 Labores Arándano",
  // Pegue aquí, entre las comillas, la dirección del Apps Script de la Google Sheet de ARÁNDANO:
  SYNC_URL: "https://script.google.com/macros/s/AKfycbykJ9eEQE-0yyQVRaJUOOLE8tJuL1ge4PKwz64Q3DQsJLg6IatXLU8rgqwdi0cKYbXfeA/exec",
  UNIDADES: ["plantas","bolsas","panelas","kg","g","canastillas","camas","metros","m²","válvulas","puntos","litros","bombadas","tanques","bultos","trampas","viajes"],

  LABORES: {
    "Arándano": [
      // Sustrato y siembra
      {c:"A01", n:"Lavado de sustrato",                                     u:"bolsas",   meta:null},
      {c:"A36", n:"Llenado de bolsas",                                      u:"bolsas",   meta:null},
      {c:"A02", n:"Desarmar panelas",                                       u:"panelas",  meta:null},
      {c:"A03", n:"Siembra",                                                u:"plantas",  meta:null},
      {c:"A37", n:"Resiembra",                                              u:"plantas",  meta:null},
      // Riego y fertirriego
      {c:"A04", n:"Toma de datos: CE, pH, aforos y lectura de drenajes",    u:"puntos",   meta:null},
      {c:"A05", n:"Preparar tanques",                                       u:"tanques",  meta:null},
      {c:"A06", n:"Pesaje de fertilizantes",                                u:"kg",       meta:null},
      {c:"A07", n:"Revisión de sistema de riego (goteros tapados, desconectados)", u:"camas", meta:null},
      {c:"A08", n:"Mantenimiento de sistema de riego (abrir válvulas, abrir tapones, lavado del sistema)", u:"válvulas", meta:null},
      {c:"A39", n:"Lavado de filtros y tanques",                            u:"",         meta:null},
      // Podas y manejo de planta
      {c:"A09", n:"Despunte",                                               u:"plantas",  meta:null},
      {c:"A10", n:"Poda de mesa",                                           u:"plantas",  meta:null},
      {c:"A11", n:"Poda continua",                                          u:"plantas",  meta:null},
      {c:"A12", n:"Poda de ramillas",                                       u:"plantas",  meta:null},
      {c:"A13", n:"Poda de formación",                                      u:"plantas",  meta:null},
      {c:"A14", n:"Cicatrización de podas",                                 u:"plantas",  meta:null},
      {c:"A38", n:"Recoger y sacar material de poda",                       u:"plantas",  meta:null},
      {c:"A15", n:"Desflore",                                               u:"plantas",  meta:null},
      {c:"A16", n:"Desfrute",                                               u:"plantas",  meta:null},
      // Sanidad
      {c:"A17", n:"Monitoreo de plagas y enfermedades",                     u:"plantas",  meta:null},
      {c:"A18", n:"Tanquear motobomba",                                     u:"tanques",  meta:null},
      {c:"A19", n:"Fumigar con estacionaria",                               u:"plantas",  meta:null},
      {c:"A20", n:"Fumigar con bomba de espalda",                           u:"bombadas", meta:null},
      {c:"A21", n:"Drench",                                                 u:"plantas",  meta:null},
      {c:"A22", n:"Aplicación de herbicida",                                u:"bombadas", meta:null},
      // Malezas y guadaña
      {c:"A23", n:"Desmalezar bolsas",                                      u:"bolsas",   meta:null},
      {c:"A24", n:"Desmalezar surcos y caminos",                            u:"metros",   meta:null},
      {c:"A25", n:"Guadañar camino central",                                u:"metros",   meta:null},
      {c:"A26", n:"Guadañar por parejo",                                    u:"m²",       meta:null},
      {c:"A27", n:"Guadañar caminos",                                       u:"metros",   meta:null},
      {c:"A28", n:"Guadañar zonas comunes",                                 u:"m²",       meta:null},
      {c:"A29", n:"Guadañar perímetro de invernadero",                      u:"metros",   meta:null},
      // Cosecha y poscosecha
      {c:"A30", n:"Cosecha",                                                u:"kg",       meta:null},
      {c:"A31", n:"Pesar y empacar arándano",                               u:"kg",       meta:null},
      {c:"A40", n:"Cargue y descargue de insumos o fruta",                  u:"viajes",   meta:null},
      // Infraestructura y generales
      {c:"A32", n:"Hacer zanjas",                                           u:"metros",   meta:null},
      {c:"A33", n:"Mantenimiento de vías",                                  u:"metros",   meta:null},
      {c:"A34", n:"Mantenimiento de invernadero",                           u:"",         meta:null},
      {c:"A35", n:"Orden y aseo",                                           u:"",         meta:null},
      {c:"A99", n:"Otra (describir en observaciones)",                      u:"",         meta:null}
    ]
  },

  // San Luis Blue y Silver Own Berries (Mesopotamia) comparten operarios.
  FINCAS: [
    {nombre:"El Carmen", cultivo:"Arándano", lider:"Juliana",
     lotes:["Bloque 1A","Bloque 1B","Bloque 2","Bloque 3"],
     operarios:["Guillermo"]},
    {nombre:"Paltacs", cultivo:"Arándano", lider:"Juliana",
     lotes:["Paltacs 1 - Válvula 6","Paltacs 1 - Válvula 7","Paltacs 1 - Válvula 8",
            "Paltacs 2 - Válvula 1","Paltacs 2 - Válvula 2","Paltacs 2 - Válvula 3","Paltacs 2 - Válvula 4",
            "Paltacs 2 - Válvula 5","Paltacs 2 - Válvula 6","Paltacs 2 - Válvula 7"],
     operarios:["Marta","John","Alejandro"]},
    {nombre:"San Luis Blue", cultivo:"Arándano", lider:"Juliana",
     lotes:["Válvula 1","Válvula 2","Válvula 3","Válvula 4","Válvula 5","Válvula 6","Válvula 7","Válvula 8","Válvula 9","Válvula 10"],
     operarios:["Juan Esteban","Lina","Diana","Alejandra","Neobadis","Fabián"]},
    {nombre:"Silver Own Berries", cultivo:"Arándano", lider:"Juliana",
     lotes:["Válvula 1","Válvula 2","Válvula 3","Válvula 4","Válvula 5","Válvula 6","Válvula 7","Válvula 8","Válvula 9","Válvula 10"],
     operarios:["Juan Esteban","Lina","Diana","Alejandra","Neobadis","Fabián"]}
  ]
};
/* ===================================================================== */
