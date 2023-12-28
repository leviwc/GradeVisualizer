import { GradeState } from "../../components/materia";
export const geologia = {
  semestre: [
    {
      numero: "1",
      materias: [
        {
          id: "0",
          codigo: "GEOE46",
          nome: "GEOLOGIA INTRODUTÓRIA I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "MATA01",
          nome: "GEOMETRIA ANALÍTICA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "QUI003",
          nome: "QUÍMICA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
      ],
    },

    {
      numero: "2",
      materias: [
        {
          id: "0",
          codigo: "FIS121",
          nome: "FISICA GERAL E EXPERIMENTAL I-E",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "GEO038",
          nome: "QUIM. ANALITICA E ELEMENTOS DE QUIM ORGANIC APLIC. GEOLOGIA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "1" }],
        },
        {
          id: "2",
          codigo: "GEOB16",
          nome: "GEOBIOLOGIA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "GEOE47",
          nome: "GEOLOGIA INTRODUTÓRIA II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "1" }],
        },
        {
          id: "4",
          codigo: "MATA02",
          nome: "CÁLCULO A",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
      ],
    },

    {
      numero: "3",
      materias: [
        {
          id: "0",
          codigo: "FIS122",
          nome: "FISICA GERAL E EXPERIMENTAL II-E",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "GEO305",
          nome: "TOPOGRAFIA E DESENHO GEOLÓGICO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "2" }],
        },
        {
          id: "2",
          codigo: "GEOB14",
          nome: "MINERALOGIA BÁSICA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "3", numero: "2" },
            { id: "2", numero: "1" },
          ],
        },
        {
          id: "3",
          codigo: "GEOB17",
          nome: "PALEONTOLOGIA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "2" },
            { id: "3", numero: "2" },
          ],
        },
        {
          id: "4",
          codigo: "MATA03",
          nome: "CÁLCULO B",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "1" },
            { id: "4", numero: "2" },
          ],
        },
      ],
    },

    {
      numero: "4",
      materias: [
        {
          id: "0",
          codigo: "FIS123",
          nome: "FÍSICA GERAL E EXPERIMENTAL III-E",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "3" }],
        },
        {
          id: "1",
          codigo: "GEO103",
          nome: "GEOMORFOLOGIA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "2" }],
        },
        {
          id: "2",
          codigo: "GEO309",
          nome: "GEOPROCESSAMENTO E GEOESTÁTISTICA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "GEOB15",
          nome: "MINERALOGIA ÓTICA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "3" },
            { id: "2", numero: "1" },
          ],
        },
        {
          id: "4",
          codigo: "QUI028",
          nome: "FISICO QUIMICA V",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "3" },
            { id: "1", numero: "2" },
          ],
        },
      ],
    },

    {
      numero: "5",
      materias: [
        {
          id: "0",
          codigo: "GEO046",
          nome: "GEOFISICA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "4" }],
        },
        {
          id: "1",
          codigo: "GEO047",
          nome: "SEDIMENTOLOGIA I A",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "4" }],
        },
        {
          id: "2",
          codigo: "GEO102",
          nome: "PEDOLOGIA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "2" }],
        },
        {
          id: "3",
          codigo: "GEO117",
          nome: "GEOQUIMICA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "4" }],
        },
        {
          id: "4",
          codigo: "GEO308",
          nome: "FOTOGEOLOGIA E SENSORIAMENTO REMOTO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "4" }],
        },
      ],
    },

    {
      numero: "6",
      materias: [
        {
          id: "0",
          codigo: "GEO049",
          nome: "ESTRATIGRAFIA I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "5" },
            { id: "3", numero: "3" },
          ],
        },
        {
          id: "1",
          codigo: "GEO050",
          nome: "GEOLOGIA ESTRUTURAL",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "5" },
            { id: "1", numero: "4" },
            { id: "1", numero: "3" },
          ],
        },
        {
          id: "2",
          codigo: "GEO057",
          nome: "GEOLOGIA DOS RECURSOS HIDRICOS",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "4" },
            { id: "4", numero: "5" },
          ],
        },
        {
          id: "3",
          codigo: "GEO188",
          nome: "PETROLOGIA IGNEA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "5" }],
        },
        {
          id: "4",
          codigo: "GEO307",
          nome: "GEOLOGIA DE CAMPO I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "5" },
            { id: "1", numero: "4" },
            { id: "4", numero: "5" },
            { id: "3", numero: "4" },
            { id: "3", numero: "3" },
          ],
        },
      ],
    },

    {
      numero: "7",
      materias: [
        {
          id: "0",
          codigo: "GEO052",
          nome: "GEOTECTONICA E GEOLOGIA HISTORICA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "6" },
            { id: "3", numero: "6" },
          ],
        },
        {
          id: "1",
          codigo: "GEO189",
          nome: "PETROLOGIA METAMORFICA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "6" }],
        },
        {
          id: "2",
          codigo: "GEO220",
          nome: "GEOLOGIA AMBIENTAL",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "5" }],
        },
        {
          id: "3",
          codigo: "GEO222",
          nome: "GEOLOGIA DO PETROLEO I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "6" },
            { id: "1", numero: "6" },
          ],
        },
        {
          id: "4",
          codigo: "GEO310",
          nome: "GEOLOGIA DE CAMPO II",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "6" },
            { id: "3", numero: "6" },
            { id: "4", numero: "6" },
          ],
        },
      ],
    },

    {
      numero: "8",
      materias: [
        {
          id: "0",
          codigo: "GEO055",
          nome: "GEOLOGIA DO BRASIL E DA BAHIA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "7" }],
        },
        {
          id: "1",
          codigo: "GEO311",
          nome: "GEOLOGIA DE RECURSOS MINERAIS",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "7" },
            { id: "1", numero: "7" },
          ],
        },
        {
          id: "2",
          codigo: "GEO312",
          nome: "MÉTODOS DE PROSPECÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "5" },
            { id: "3", numero: "5" },
          ],
        },
      ],
    },

    {
      numero: "9",
      materias: [
        {
          id: "0",
          codigo: "GEO313",
          nome: "ECONOMIA E ADMINISTRAÇÃO DOS RECURSOS FÍSICOS DA TERRA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "8" }],
        },
        {
          id: "1",
          codigo: "GEO314",
          nome: "GEOLOGIA DE CAMPO III",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "7" },
            { id: "1", numero: "7" },
            { id: "4", numero: "7" },
          ],
        },
        {
          id: "2",
          codigo: "GEOA75",
          nome: "TRABALHO FINAL DE GRADUAÇÃO I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "7" },
            { id: "2", numero: "6" },
            { id: "2", numero: "7" },
            { id: "3", numero: "7" },
            { id: "4", numero: "7" },
          ],
        },
      ],
    },

    {
      numero: "10",
      materias: [
        {
          id: "0",
          codigo: "GEOA76",
          nome: "TRABALHO FINAL DE GRADUAÇÃO II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "9" }],
        },
      ],
    },
  ],
};
