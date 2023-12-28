import { GradeState } from "../../components/materia";
export const quimica_2 = {
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
          codigo: "FIS121",
          nome: "FISICA GERAL E EXPERIMENTAL I-E",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "1" }],
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
          codigo: "QUI138",
          nome: "QUIMICA ORGANICA FUNDAMENTAL III",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "1" },
            { id: "3", numero: "1" },
          ],
        },
        {
          id: "3",
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
          codigo: "MAT236",
          nome: "MÉTODOS ESTATÍSTICOS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "1" }],
        },
        {
          id: "1",
          codigo: "MATA03",
          nome: "CÁLCULO B",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "2" },
            { id: "0", numero: "1" },
          ],
        },
        {
          id: "2",
          codigo: "QUI136",
          nome: "QUIMICA INORGANICA BASICA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "1" },
            { id: "3", numero: "1" },
            { id: "3", numero: "2" },
          ],
        },
        {
          id: "3",
          codigo: "QUI139",
          nome: "QUIMICA ORGANICA FUNDAMENTAL IV",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "2" }],
        },
        {
          id: "4",
          codigo: "QUIA15",
          nome: "FÍSICO QUÍMICA -A",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "1" },
            { id: "2", numero: "1" },
            { id: "3", numero: "1" },
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
          codigo: "QUI137",
          nome: "QUIMICA INORGANICA DE COORDENACAO",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "3" },
            { id: "2", numero: "1" },
            { id: "3", numero: "1" },
            { id: "3", numero: "2" },
          ],
        },
        {
          id: "1",
          codigo: "QUIA30",
          nome: "FÍSICO QUÍMICA B",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "4", numero: "3" },
            { id: "1", numero: "1" },
          ],
        },
        {
          id: "2",
          codigo: "QUIA44",
          nome: "QUÍMICA ORGÂNICA EXPERIMENTAL II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "3" }],
        },
        {
          id: "3",
          codigo: "QUIA49",
          nome: "QUÍMICA QUÂNTICA I : ESTRUTURA ATÔMICA E MOLECULAR",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "3" },
            { id: "3", numero: "2" },
          ],
        },
      ],
    },

    {
      numero: "5",
      materias: [
        {
          id: "0",
          codigo: "FIS123",
          nome: "FÍSICA GERAL E EXPERIMENTAL III-E",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "2" },
            { id: "1", numero: "3" },
          ],
        },
        {
          id: "1",
          codigo: "QUIA29",
          nome: "MÉTODOS CLÁSSICOS DE ANÁLISE",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "3" },
            { id: "1", numero: "1" },
          ],
        },
        {
          id: "2",
          codigo: "QUIA48",
          nome: "QUÍMICA DE BIOCOMPOSTOS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "3" }],
        },
        {
          id: "3",
          codigo: "QUIA57",
          nome: "MECANISMOS DE REAÇÕES ORGÂNICAS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "3" }],
        },
      ],
    },

    {
      numero: "6",
      materias: [
        {
          id: "0",
          codigo: "FIS124",
          nome: "FÍSICA GERAL E EXPERIMENTAL IV-E",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "5" }],
        },
        {
          id: "1",
          codigo: "QUIA16",
          nome: "FÍSICO QUÍMICA- C",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "4", numero: "3" },
            { id: "1", numero: "5" },
          ],
        },
        {
          id: "2",
          codigo: "QUIA56",
          nome: "MÉTODOS FÍSICOS DE ANÁLISE ORGÂNICA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "3" }],
        },
        {
          id: "3",
          codigo: "QUIB15",
          nome: "QUÍMICA ANALÍTICA INSTRUMENTAL I A",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "5" }],
        },
      ],
    },

    {
      numero: "7",
      materias: [
        {
          id: "0",
          codigo: "QUIA52",
          nome: "PROJETOS EM QUÍMICA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "6" },
            { id: "2", numero: "4" },
            { id: "3", numero: "6" },
          ],
        },
        {
          id: "1",
          codigo: "QUIA64",
          nome: "QUÍMICA ORGÂNICA EXPERIMENTAL III",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "4" },
            { id: "2", numero: "6" },
          ],
        },
        {
          id: "2",
          codigo: "QUIA65",
          nome: "CINÉTICA DAS REAÇÕES QUÍMICAS",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "4", numero: "3" },
            { id: "1", numero: "6" },
            { id: "1", numero: "5" },
            { id: "1", numero: "4" },
          ],
        },
        {
          id: "3",
          codigo: "QUIB16",
          nome: "QUÍMICA ANALÍTICA INSTRUMENTAL II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "6" }],
        },
      ],
    },

    {
      numero: "8",
      materias: [
        {
          id: "0",
          codigo: "QUIA53",
          nome: "TRABALHO DE CONCLUSÃO DE CURSO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "7" }],
        },
        {
          id: "1",
          codigo: "QUIA61",
          nome: "MÉTODOS DE SEPARAÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "6" }],
        },
        {
          id: "2",
          codigo: "QUIA66",
          nome: "ESTÁGIO SUPERVISIONADO I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "6" },
            { id: "2", numero: "4" },
            { id: "3", numero: "6" },
          ],
        },
      ],
    },
  ],
};
