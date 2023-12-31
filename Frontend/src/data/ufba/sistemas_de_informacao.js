import { GradeState } from "../../components/materia";
export const sistemas_de_informacao = {
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
          codigo: "MATA37",
          nome: "INTRODUÇÃO À LÓGICA DE PROGRAMAÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "MATA39",
          nome: "SEMINÁRIOS DE INTRODUÇÃO AO CURSO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "MATA42",
          nome: "MATEMÁTICA DISCRETA I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "MATA68",
          nome: "COMPUTADOR ÉTICA E SOCIEDADE",
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
          codigo: "ADME99",
          nome: "ECONOMIA DA INOVAÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "MATC73",
          nome: "INTRODUÇÃO À LÓGICA MATEMÁTICA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "1" }],
        },
        {
          id: "2",
          codigo: "MATC90",
          nome: "CIRCUITOS DIGITAIS E ARQUITETURA DE COMPUTADORES",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "MATC92",
          nome: "FUNDAMENTOS DE SISTEMAS DE INFORMAÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "MATD04",
          nome: "ESTRUTURAS DE DADOS",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "1" },
            { id: "3", numero: "1" },
          ],
        },
      ],
    },

    {
      numero: "3",
      materias: [
        {
          id: "0",
          codigo: "ADM001",
          nome: "INTRODUCÃO À ADMINISTRACAO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "MATA07",
          nome: "ÁLGEBRA LINEAR A",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "MATA55",
          nome: "PROGRAMAÇÃO ORIENTADA A OBJETOS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "2" }],
        },
        {
          id: "3",
          codigo: "MATA58",
          nome: "SISTEMAS OPERACIONAIS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "2" }],
        },
        {
          id: "4",
          codigo: "MATC94",
          nome: "INTRODUÇÃO AS LINGUAGENS FORMAIS E TEORIA DA COMPUTAÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "1" }],
        },
      ],
    },

    {
      numero: "4",
      materias: [
        {
          id: "0",
          codigo: "LETA09",
          nome: "OFICINA DE LEITURA E PRODUÇÃO DE TEXTOS",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "MAT236",
          nome: "MÉTODOS ESTATÍSTICOS",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "1" },
            { id: "1", numero: "3" },
          ],
        },
        {
          id: "2",
          codigo: "MATA59",
          nome: "REDES DE COMPUTADORES I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "2" }],
        },
        {
          id: "3",
          codigo: "MATA62",
          nome: "ENGENHARIA DE SOFTWARE I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "3" }],
        },
        {
          id: "4",
          codigo: "MATC82",
          nome: "SISTEMAS WEB",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "3", numero: "3" },
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
          codigo: "ADM211",
          nome: "MÉTODOS QUANTITATIVOS APLICADOS À ADMINISTRAÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "3" },
            { id: "1", numero: "4" },
          ],
        },
        {
          id: "1",
          codigo: "MATA56",
          nome: "PARADIGMAS DE LINGUAGENS DE PROGRAMAÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "3" },
            { id: "4", numero: "2" },
          ],
        },
        {
          id: "2",
          codigo: "MATA60",
          nome: "BANCO DE DADOS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "2" }],
        },
        {
          id: "3",
          codigo: "MATA63",
          nome: "ENGENHARIA DE SOFTWARE II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "4" }],
        },
        {
          id: "4",
          codigo: "MATC84",
          nome: "LABORATÓRIO DE PROGRAMAÇÃO WEB",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "3" }],
        },
      ],
    },

    {
      numero: "6",
      materias: [
        {
          id: "0",
          codigo: "ADMF01",
          nome: "SISTEMAS DE APOIO À DECISÃO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "5" }],
        },
        {
          id: "1",
          codigo: "MAT220",
          nome: "EMPREENDEDORES EM INFORMATICA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "MATA76",
          nome: "LINGUAGENS PARA APLICAÇÃO COMERCIAL",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "1" }],
        },
        {
          id: "3",
          codigo: "MATB09",
          nome: "LABORATÓRIO DE BANCO DE DADOS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "5" }],
        },
        {
          id: "4",
          codigo: "MATC89",
          nome: "APLICAÇÕES PARA DISPOSITIVOS MÓVEIS",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "3" },
            { id: "2", numero: "4" },
          ],
        },
      ],
    },

    {
      numero: "7",
      materias: [
        {
          id: "0",
          codigo: "MATA64",
          nome: "INTELIGÊNCIA ARTIFICIAL",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "2" },
            { id: "4", numero: "2" },
          ],
        },
        {
          id: "1",
          codigo: "MATB02",
          nome: "QUALIDADE DE SOFTWARE",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "5" }],
        },
        {
          id: "2",
          codigo: "MATB19",
          nome: "SISTEMAS MULTIMÍDIA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "3" }],
        },
        {
          id: "3",
          codigo: "MATC72",
          nome: "INTERAÇÃO HUMANO-COMPUTADOR",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "4" }],
        },
        {
          id: "4",
          codigo: "MATC99",
          nome: "SEGURANÇA E AUDITORIA DE SISTEMAS DE INFORMAÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "6" },
            { id: "1", numero: "3" },
          ],
        },
        {
          id: "5",
          codigo: "Sem.",
          nome: "",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "6",
          codigo: "MATC97",
          nome: "TCC BACHARELADO SISTEMAS DE INFORMAÇÃO I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "4" }],
        },
        {
          id: "7",
          codigo: "Sem.",
          nome: "",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "8",
          codigo: "MATC98",
          nome: "TCC BACHARELADO SISTEMAS DE INFORMAÇÃO II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "6", numero: "7" }],
        },
      ],
    },
  ],
};
