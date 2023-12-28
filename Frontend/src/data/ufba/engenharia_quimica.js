import { GradeState } from "../../components/materia";
export const engenharia_quimica = {
  semestre: [
    {
      numero: "1",
      materias: [
        {
          id: "0",
          codigo: "ENGC99",
          nome: "INTRODUÇÃO À ENGENHARIA QUÌMICA",
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
          codigo: "MATA02",
          nome: "CÁLCULO A",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "QUI037",
          nome: "QUÍMICA GERAL",
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
          codigo: "ENGD01",
          nome: "MÉTODOS COMPUTACIONAIS NA ENGENHARIA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "1" }],
        },
        {
          id: "1",
          codigo: "FIS121",
          nome: "FISICA GERAL E EXPERIMENTAL I-E",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "MATA03",
          nome: "CÁLCULO B",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "1" },
            { id: "2", numero: "1" },
          ],
        },
        {
          id: "3",
          codigo: "MATA07",
          nome: "ÁLGEBRA LINEAR A",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "1" }],
        },
        {
          id: "4",
          codigo: "QUIA14",
          nome: "QUÍMICA INORGÂNICA BÁSICA I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "1" }],
        },
      ],
    },

    {
      numero: "3",
      materias: [
        {
          id: "0",
          codigo: "ENGD02",
          nome: "ESTATÍSTICA NA ENGENHARIA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "2" }],
        },
        {
          id: "1",
          codigo: "FIS122",
          nome: "FISICA GERAL E EXPERIMENTAL II-E",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "2" },
            { id: "1", numero: "1" },
            { id: "2", numero: "1" },
          ],
        },
        {
          id: "2",
          codigo: "MATA04",
          nome: "CÁLCULO C",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "2" }],
        },
        {
          id: "3",
          codigo: "QUIA01",
          nome: "PRINCÍPIOS DA ANÁLISE QUÍMICA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "2" }],
        },
        {
          id: "4",
          codigo: "QUIA15",
          nome: "FÍSICO QUÍMICA -A",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "2" },
            { id: "3", numero: "1" },
          ],
        },
      ],
    },

    {
      numero: "4",
      materias: [
        {
          id: "0",
          codigo: "ENG372",
          nome: "PROCESSOS UNITÁRIOS DA INDÚSTRIA QUÍMICA I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "3" }],
        },
        {
          id: "1",
          codigo: "ENGD04",
          nome: "MÉTODOS MATEMÁTICOS E COMPUTACIONAIS NA ENGENHARIA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "2" },
            { id: "2", numero: "3" },
          ],
        },
        {
          id: "2",
          codigo: "FIS123",
          nome: "FÍSICA GERAL E EXPERIMENTAL III-E",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "3" },
            { id: "2", numero: "2" },
          ],
        },
        {
          id: "3",
          codigo: "QUI138",
          nome: "QUIMICA ORGANICA FUNDAMENTAL III",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "1" }],
        },
        {
          id: "4",
          codigo: "QUIA16",
          nome: "FÍSICO QUÍMICA- C",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "3", numero: "3" },
            { id: "4", numero: "3" },
          ],
        },
        {
          id: "5",
          codigo: "QUIA17",
          nome: "QUÍMICA ORGÂNICA PRÁTICA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "1" }],
        },
      ],
    },

    {
      numero: "5",
      materias: [
        {
          id: "0",
          codigo: "ENG008",
          nome: "FENOMENOS DE TRANSPORTE I-A",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "3" },
            { id: "2", numero: "3" },
          ],
        },
        {
          id: "1",
          codigo: "ENG269",
          nome: "CIÊNCIAS DO AMBIENTE",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "4" }],
        },
        {
          id: "2",
          codigo: "ENG353",
          nome: "CALCULO DE REATORES",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "4" }],
        },
        {
          id: "3",
          codigo: "ENG396",
          nome: "TERMODINAMICA I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "2" },
            { id: "2", numero: "2" },
            { id: "4", numero: "3" },
          ],
        },
        {
          id: "4",
          codigo: "ENGD05",
          nome: "MECÂNICA DOS SÓLIDOS APLICADA A PLANTAS INDUSTRIAIS",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "2" },
            { id: "2", numero: "2" },
          ],
        },
        {
          id: "5",
          codigo: "QUI139",
          nome: "QUIMICA ORGANICA FUNDAMENTAL IV",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "4" }],
        },
      ],
    },

    {
      numero: "6",
      materias: [
        {
          id: "0",
          codigo: "ENG003",
          nome: "ELETRICIDADE",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "4" }],
        },
        {
          id: "1",
          codigo: "ENG358",
          nome: "FENOMENOS DE TRANSPORTE II",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "5" },
            { id: "4", numero: "3" },
          ],
        },
        {
          id: "2",
          codigo: "ENG426",
          nome: "OPERACOES UNITARIAS DA INDUSTRIA QUIMICA I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "5" },
            { id: "3", numero: "5" },
            { id: "4", numero: "3" },
          ],
        },
        {
          id: "3",
          codigo: "ENG427",
          nome: "TERMODINAMICA II",
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
          codigo: "ENG009",
          nome: "CONTROLE DE PROCESSOS QUÍMICOS",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "5" },
            { id: "2", numero: "6" },
          ],
        },
        {
          id: "1",
          codigo: "ENG185",
          nome: "OPERACOES UNITARIAS DA INDUSTRIA QUIMICA II",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "6" },
            { id: "3", numero: "6" },
          ],
        },
        {
          id: "2",
          codigo: "ENG364",
          nome: "PRODUCAO E TRANSPORTE DE CALOR",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "6" }],
        },
        {
          id: "3",
          codigo: "ENG421",
          nome: "FENOMENOS DE TRANSPORTE III",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "6" }],
        },
        {
          id: "4",
          codigo: "ENGD06",
          nome: "ENGENHARIA ECONÔMICA E GESTÃO",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "6" },
            { id: "0", numero: "3" },
          ],
        },
      ],
    },

    {
      numero: "8",
      materias: [
        {
          id: "0",
          codigo: "ENG360",
          nome: "MATERIAIS DE CONSTRUCAO E QUIPAMENTOS DA INDUSTRIA QUIMICA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "2" },
            { id: "4", numero: "2" },
          ],
        },
        {
          id: "1",
          codigo: "ENGD03",
          nome: "LABORATÓRIO DE ENGENHARIA QUÍMICA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "5" },
            { id: "2", numero: "5" },
            { id: "1", numero: "6" },
            { id: "3", numero: "5" },
            { id: "2", numero: "6" },
            { id: "3", numero: "6" },
          ],
        },
        {
          id: "2",
          codigo: "ENGD08",
          nome: "TRABALHO FINAL DE CURSO NA ENGENHARIA QUÍMICA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "7" },
            { id: "1", numero: "7" },
            { id: "2", numero: "7" },
            { id: "3", numero: "7" },
            { id: "4", numero: "7" },
          ],
        },
      ],
    },

    {
      numero: "9",
      materias: [
        {
          id: "0",
          codigo: "ENG363",
          nome: "PROJETO E PLANEJAMENTO DA INDÚSTRIA QUÍMICA II-A",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "7" }],
        },
        {
          id: "1",
          codigo: "ENGD07",
          nome: "OPERAÇÃO E SEGURANÇA DE PLANTAS INDUSTRIAIS",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "7" },
            { id: "1", numero: "7" },
            { id: "0", numero: "8" },
            { id: "2", numero: "7" },
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
          codigo: "ENG369",
          nome: "ESTÁGIO INDUSTRIAL EM ENGENHARIA QUIMICA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "9" },
            { id: "1", numero: "9" },
          ],
        },
      ],
    },
  ],
};
