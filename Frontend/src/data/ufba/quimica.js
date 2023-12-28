import { GradeState } from "../../components/materia";
export const quimica = {
  semestre: [
    {
      numero: "1",
      materias: [
        {
          id: "0",
          codigo: "MATA02",
          nome: "CÁLCULO A",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "QUIA26",
          nome: "LABORATÓRIO I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "QUIA27",
          nome: "QUÍMICA FUNDAMENTAL I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "QUIA28",
          nome: "QUÍMICA FUNDAMENTAL II",
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
          codigo: "EDCA02",
          nome: "ORGANIZAÇÃO DA EDUCAÇÃO BRASILEIRA II",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "FIS121",
          nome: "FISICA GERAL E EXPERIMENTAL I-E",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "1" }],
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
          codigo: "QUI138",
          nome: "QUIMICA ORGANICA FUNDAMENTAL III",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "1" },
            { id: "3", numero: "1" },
          ],
        },
        {
          id: "4",
          codigo: "QUIA42",
          nome: "QUÍMICA FUNDAMENTAL III",
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
          codigo: "MATA03",
          nome: "CÁLCULO B",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "2" },
            { id: "0", numero: "1" },
          ],
        },
        {
          id: "1",
          codigo: "QUI136",
          nome: "QUIMICA INORGANICA BASICA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "1" },
            { id: "3", numero: "1" },
            { id: "4", numero: "2" },
          ],
        },
        {
          id: "2",
          codigo: "QUI139",
          nome: "QUIMICA ORGANICA FUNDAMENTAL IV",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "2" }],
        },
        {
          id: "3",
          codigo: "QUIA15",
          nome: "FÍSICO QUÍMICA -A",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "1" },
            { id: "2", numero: "1" },
            { id: "3", numero: "1" },
            { id: "4", numero: "2" },
          ],
        },
        {
          id: "4",
          codigo: "QUIA43",
          nome: "O PROFESSOR E O ENSINO DA QUÍMICA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
      ],
    },

    {
      numero: "4",
      materias: [
        {
          id: "0",
          codigo: "EDCA01",
          nome: "FUNDAMENTOS PSICOLÓGICOS DA EDUCAÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "MAT236",
          nome: "MÉTODOS ESTATÍSTICOS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "1" }],
        },
        {
          id: "2",
          codigo: "QUI137",
          nome: "QUIMICA INORGANICA DE COORDENACAO",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "3" },
            { id: "2", numero: "1" },
            { id: "3", numero: "1" },
            { id: "4", numero: "2" },
          ],
        },
        {
          id: "3",
          codigo: "QUIA30",
          nome: "FÍSICO QUÍMICA B",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "3", numero: "3" },
            { id: "1", numero: "1" },
          ],
        },
        {
          id: "4",
          codigo: "QUIA44",
          nome: "QUÍMICA ORGÂNICA EXPERIMENTAL II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "3" }],
        },
        {
          id: "5",
          codigo: "QUIB07",
          nome: "HISTÓRIA DA QUÍMICA I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "1" },
            { id: "3", numero: "1" },
            { id: "4", numero: "2" },
            { id: "4", numero: "3" },
          ],
        },
      ],
    },

    {
      numero: "5",
      materias: [
        {
          id: "0",
          codigo: "EDCA11",
          nome: "DIDÁTICA E PRAXIS PEDAGÓGICA I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "4" }],
        },
        {
          id: "1",
          codigo: "FIS123",
          nome: "FÍSICA GERAL E EXPERIMENTAL III-E",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "2" },
            { id: "0", numero: "3" },
          ],
        },
        {
          id: "2",
          codigo: "LETE46",
          nome: "LIBRAS-LÍNGUA BRASILEIRA DE SINAIS",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "QUIA29",
          nome: "MÉTODOS CLÁSSICOS DE ANÁLISE",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "3" },
            { id: "1", numero: "1" },
          ],
        },
        {
          id: "4",
          codigo: "QUIA45",
          nome: "HISTÓRIA E EPISTEMOLOGIA NO ENSINO DE QUÍMICA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "5", numero: "4" }],
        },
        {
          id: "5",
          codigo: "QUIA48",
          nome: "QUÍMICA DE BIOCOMPOSTOS",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "3" },
            { id: "4", numero: "4" },
          ],
        },
      ],
    },

    {
      numero: "6",
      materias: [
        {
          id: "0",
          codigo: "EDCA12",
          nome: "DIDÁTICA E PRAXIS PEDAGÓGICA II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "5" }],
        },
        {
          id: "1",
          codigo: "FIS124",
          nome: "FÍSICA GERAL E EXPERIMENTAL IV-E",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "5" }],
        },
        {
          id: "2",
          codigo: "QUIA16",
          nome: "FÍSICO QUÍMICA- C",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "3", numero: "3" },
            { id: "3", numero: "5" },
          ],
        },
        {
          id: "3",
          codigo: "QUIA47",
          nome: "ENSINO DE QUÍMICA NO CONTEXTO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "5", numero: "4" }],
        },
        {
          id: "4",
          codigo: "QUIA49",
          nome: "QUÍMICA QUÂNTICA I : ESTRUTURA ATÔMICA E MOLECULAR",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "3" },
            { id: "4", numero: "2" },
          ],
        },
        {
          id: "5",
          codigo: "QUIB15",
          nome: "QUÍMICA ANALÍTICA INSTRUMENTAL I A",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "5" }],
        },
      ],
    },

    {
      numero: "7",
      materias: [
        {
          id: "0",
          codigo: "EDCA52",
          nome: "DIDÁTICA E PRÁXIS PEDAGÓGICA DE QUÍMICA I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "6" }],
        },
        {
          id: "1",
          codigo: "QUIA50",
          nome: "O EXPERIMENTO NO ENSINO DE QUÍMICA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "5", numero: "4" }],
        },
        {
          id: "2",
          codigo: "QUIA51",
          nome: "QUÍMICA ORGÂNICA EXPERIMENTAL IV",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "4" }],
        },
        {
          id: "3",
          codigo: "QUIB02",
          nome: "PROJETOS EM ENSINO DE QUÍMICA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "6" },
            { id: "4", numero: "4" },
            { id: "5", numero: "6" },
          ],
        },
      ],
    },

    {
      numero: "8",
      materias: [
        {
          id: "0",
          codigo: "EDCA53",
          nome: "DIDÁTICA E PRÁXIS PEDAGÓGICA DE QUÍMICA II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "7" }],
        },
        {
          id: "1",
          codigo: "QUIB03",
          nome: "TRABALHO DE CONCLUSÃO DE CURSO PARA LICENCIATURA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "7" }],
        },
      ],
    },
  ],
};
