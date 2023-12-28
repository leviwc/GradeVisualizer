import { GradeState } from "../../components/materia";
export const geofisica = {
  semestre: [
    {
      numero: "1",
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
          codigo: "GEO202",
          nome: "GEOLOGIA FÍSICA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "MATA01",
          nome: "GEOMETRIA ANALÍTICA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "MATA02",
          nome: "CÁLCULO A",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
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
          codigo: "FIS122",
          nome: "FISICA GERAL E EXPERIMENTAL II-E",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "1" },
            { id: "2", numero: "1" },
            { id: "3", numero: "1" },
          ],
        },
        {
          id: "1",
          codigo: "GEO203",
          nome: "MINEROLOGIA E PETROLOGIA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "1" },
            { id: "4", numero: "1" },
          ],
        },
        {
          id: "2",
          codigo: "GEO204",
          nome: "SEDIMENTOLOGIA E ESTRATIGRAFIA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "1" },
            { id: "1", numero: "1" },
          ],
        },
        {
          id: "3",
          codigo: "MATA03",
          nome: "CÁLCULO B",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "1" },
            { id: "3", numero: "1" },
          ],
        },
        {
          id: "4",
          codigo: "MATA07",
          nome: "ÁLGEBRA LINEAR A",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "1" }],
        },
      ],
    },

    {
      numero: "3",
      materias: [
        {
          id: "0",
          codigo: "FIS123",
          nome: "FÍSICA GERAL E EXPERIMENTAL III-E",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "2" },
            { id: "3", numero: "2" },
          ],
        },
        {
          id: "1",
          codigo: "GEO205",
          nome: "GEOLOGIA ESTRUTURAL E GEOTECTONICA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "2" },
            { id: "2", numero: "2" },
          ],
        },
        {
          id: "2",
          codigo: "GEO206",
          nome: "ELEMENTOS DE GEOFISICA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "1" }],
        },
        {
          id: "3",
          codigo: "MATA04",
          nome: "CÁLCULO C",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "2" }],
        },
      ],
    },

    {
      numero: "4",
      materias: [
        {
          id: "0",
          codigo: "FIS124",
          nome: "FÍSICA GERAL E EXPERIMENTAL IV-E",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "3" }],
        },
        {
          id: "1",
          codigo: "FIS138",
          nome: "INTRODUÇÃO À FÍSICA DA TERRA SÓLIDA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "3" },
            { id: "1", numero: "1" },
            { id: "2", numero: "3" },
          ],
        },
        {
          id: "2",
          codigo: "GEO207",
          nome: "PROPRIEDADES FISICAS DAS ROCHAS",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "3" },
            { id: "1", numero: "2" },
          ],
        },
        {
          id: "3",
          codigo: "MAT045",
          nome: "PROCESSAMENTO DE DADOS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "2" }],
        },
        {
          id: "4",
          codigo: "MATA05",
          nome: "CÁLCULO D",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "2" }],
        },
      ],
    },

    {
      numero: "5",
      materias: [
        {
          id: "0",
          codigo: "FIS132",
          nome: "MÉTODOS EM GEOFÍSICA NUCLEAR",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "4" },
            { id: "2", numero: "3" },
          ],
        },
        {
          id: "1",
          codigo: "GEO208",
          nome: "MÉTODOS SÍSMICOS",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "4" },
            { id: "1", numero: "4" },
            { id: "1", numero: "3" },
            { id: "3", numero: "3" },
          ],
        },
        {
          id: "2",
          codigo: "GEO209",
          nome: "METODOS ELETRICOS E RADIOMETRICOS",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "4" },
            { id: "3", numero: "3" },
          ],
        },
        {
          id: "3",
          codigo: "GEO210",
          nome: "METODOS POTENCIAIS EM GEOFISICA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "4" }],
        },
        {
          id: "4",
          codigo: "GEO212",
          nome: "PROCESSAMENTO DE DADOS EM GEOFISICA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "3", numero: "4" },
            { id: "3", numero: "3" },
            { id: "4", numero: "2" },
          ],
        },
      ],
    },

    {
      numero: "6",
      materias: [
        {
          id: "0",
          codigo: "FIS133",
          nome: "FÍSICA DO MEIO AMBIENTE",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "3" },
            { id: "3", numero: "3" },
          ],
        },
        {
          id: "1",
          codigo: "GEO162",
          nome: "GEOFISICA DO PETROLEO",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "5" },
            { id: "3", numero: "5" },
            { id: "4", numero: "5" },
          ],
        },
        {
          id: "2",
          codigo: "GEO211",
          nome: "METODOS ELETROMAGNETICOS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "5" }],
        },
        {
          id: "3",
          codigo: "GEO215",
          nome: "PERFILAGEM GEOFISICA DE POÇOS",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "4" },
            { id: "2", numero: "2" },
          ],
        },
      ],
    },

    {
      numero: "7",
      materias: [
        {
          id: "0",
          codigo: "GEO216",
          nome: "GEOFISICA DE AGUA SUBTERRANEA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "5" },
            { id: "2", numero: "5" },
          ],
        },
        {
          id: "1",
          codigo: "GEO217",
          nome: "GEOFISICA DE EXPLORAÇÃO MINERAL",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "5" },
            { id: "2", numero: "6" },
            { id: "4", numero: "5" },
          ],
        },
        {
          id: "2",
          codigo: "GEO225",
          nome: "GEOFISICA APLICADA A ENGENHARIA GEOTECNICA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "4" },
            { id: "1", numero: "5" },
            { id: "2", numero: "5" },
          ],
        },
        {
          id: "3",
          codigo: "GEOE31",
          nome: "PRODUÇÃO DE TEXTO CIENTÍFICO EM LaTeX",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "3", numero: "4" },
            { id: "4", numero: "4" },
          ],
        },
        {
          id: "4",
          codigo: "GEOE32",
          nome: "TRABALHO FINAL DE GRADUAÇÃO I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "5" },
            { id: "1", numero: "5" },
            { id: "3", numero: "5" },
            { id: "2", numero: "6" },
            { id: "4", numero: "5" },
          ],
        },
      ],
    },

    {
      numero: "8",
      materias: [
        {
          id: "0",
          codigo: "GEOE33",
          nome: "TRABALHO FINAL DE GRADUAÇÃO II",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "3", numero: "7" },
            { id: "4", numero: "7" },
          ],
        },
      ],
    },
  ],
};
