import { GradeState } from "../../components/materia";
export const quimica_noturno = {
  semestre: [
    {
      numero: "1",
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
          codigo: "MATA02",
          nome: "CÁLCULO A",
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
        {
          id: "4",
          codigo: "QUIB12",
          nome: "LABORATÓRIO I-N",
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
          dependencias: [{ id: "1", numero: "1" }],
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
          codigo: "QUIA42",
          nome: "QUÍMICA FUNDAMENTAL III",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "QUIA43",
          nome: "O PROFESSOR E O ENSINO DA QUÍMICA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "QUIB18",
          nome: "SEMINÁRIO EM LABORATÓRIO",
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
          dependencias: [{ id: "1", numero: "1" }],
        },
        {
          id: "1",
          codigo: "QUI138",
          nome: "QUIMICA ORGANICA FUNDAMENTAL III",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "1" },
            { id: "3", numero: "1" },
          ],
        },
        {
          id: "2",
          codigo: "QUIA15",
          nome: "FÍSICO QUÍMICA -A",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "1" },
            { id: "2", numero: "1" },
            { id: "3", numero: "1" },
            { id: "2", numero: "2" },
          ],
        },
        {
          id: "3",
          codigo: "QUIB07",
          nome: "HISTÓRIA DA QUÍMICA I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "1" },
            { id: "3", numero: "1" },
            { id: "2", numero: "2" },
            { id: "3", numero: "2" },
          ],
        },
      ],
    },

    {
      numero: "4",
      materias: [
        {
          id: "0",
          codigo: "MAT236",
          nome: "MÉTODOS ESTATÍSTICOS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "1" }],
        },
        {
          id: "1",
          codigo: "QUI139",
          nome: "QUIMICA ORGANICA FUNDAMENTAL IV",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "3" }],
        },
        {
          id: "2",
          codigo: "QUIA30",
          nome: "FÍSICO QUÍMICA B",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "3" },
            { id: "4", numero: "1" },
          ],
        },
        {
          id: "3",
          codigo: "QUIA45",
          nome: "HISTÓRIA E EPISTEMOLOGIA NO ENSINO DE QUÍMICA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "3" }],
        },
        {
          id: "4",
          codigo: "QUIB19",
          nome: "QUÍMICA INORGÂNICA I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "1" },
            { id: "3", numero: "1" },
            { id: "2", numero: "2" },
          ],
        },
      ],
    },

    {
      numero: "5",
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
          codigo: "FIS123",
          nome: "FÍSICA GERAL E EXPERIMENTAL III-E",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "2" },
            { id: "0", numero: "3" },
          ],
        },
        {
          id: "2",
          codigo: "QUIA44",
          nome: "QUÍMICA ORGÂNICA EXPERIMENTAL II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "4" }],
        },
        {
          id: "3",
          codigo: "QUIB02",
          nome: "PROJETOS EM ENSINO DE QUÍMICA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "4" }],
        },
        {
          id: "4",
          codigo: "QUIB20",
          nome: "QUÍMICA INORGÂNICA II",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "1" },
            { id: "3", numero: "1" },
            { id: "2", numero: "2" },
          ],
        },
      ],
    },

    {
      numero: "6",
      materias: [
        {
          id: "0",
          codigo: "EDCB71",
          nome: "ESTÁGIO DE QUÍMICA I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "5" },
            { id: "0", numero: "1" },
          ],
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
          codigo: "LETE46",
          nome: "LIBRAS-LÍNGUA BRASILEIRA DE SINAIS",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "QUIB21",
          nome: "QUÍMICA INORGÂNICA III",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "5" }],
        },
        {
          id: "4",
          codigo: "QUIB24",
          nome: "MÉTODOS CLÁSSICOS DE ANÁLISE",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "4", numero: "1" },
            { id: "4", numero: "4" },
          ],
        },
      ],
    },

    {
      numero: "7",
      materias: [
        {
          id: "0",
          codigo: "EDCA79",
          nome: "DIDÁTICA E PRÁXIS PEDAGÓGICA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "5" },
            { id: "0", numero: "1" },
            { id: "3", numero: "4" },
          ],
        },
        {
          id: "1",
          codigo: "EDCL33",
          nome: "ESTÁGIO DE QUÍMICA II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "6" }],
        },
        {
          id: "2",
          codigo: "QUIA47",
          nome: "ENSINO DE QUÍMICA NO CONTEXTO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "4" }],
        },
        {
          id: "3",
          codigo: "QUIB22",
          nome: "PRINCÍPIOS DE ANÁLISE INSTRUMENTAL",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "6" }],
        },
      ],
    },

    {
      numero: "8",
      materias: [
        {
          id: "0",
          codigo: "EDCB75",
          nome: "DIDÁTICA E PRÁXIS PEDAGÓGICA DE QUÍMICA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "7" }],
        },
        {
          id: "1",
          codigo: "EDCL34",
          nome: "ESTÁGIO DE QUÍMICA III",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "7" },
            { id: "3", numero: "5" },
          ],
        },
        {
          id: "2",
          codigo: "QUIA48",
          nome: "QUÍMICA DE BIOCOMPOSTOS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "4" }],
        },
        {
          id: "3",
          codigo: "QUIA50",
          nome: "O EXPERIMENTO NO ENSINO DE QUÍMICA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "3", numero: "4" },
            { id: "3", numero: "3" },
          ],
        },
      ],
    },

    {
      numero: "9",
      materias: [
        {
          id: "0",
          codigo: "EDCL35",
          nome: "ESTÁGIO DE QUÍMICA IV",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "8" }],
        },
        {
          id: "1",
          codigo: "QUIA16",
          nome: "FÍSICO QUÍMICA- C",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "3" },
            { id: "4", numero: "6" },
          ],
        },
        {
          id: "2",
          codigo: "QUIB23",
          nome: "TCC PARA LICENCIATURA EM QUÍMICA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "8" },
            { id: "3", numero: "5" },
          ],
        },
      ],
    },
  ],
};
