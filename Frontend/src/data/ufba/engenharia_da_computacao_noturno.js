import { GradeState } from "../../components/materia";
export const engenharia_da_computacao = {
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
          codigo: "QUI029",
          nome: "QUIMICA GERAL",
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
          codigo: "ENGC26",
          nome: "SISTEMAS LÓGICOS",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "ENGG51",
          nome: "INTRODUÇÃO À ENGENHARIA DE COMPUTAÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "FIS122",
          nome: "FISICA GERAL E EXPERIMENTAL II-E",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "1" },
            { id: "1", numero: "1" },
            { id: "2", numero: "1" },
          ],
        },
        {
          id: "3",
          codigo: "MATA03",
          nome: "CÁLCULO B",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "1" },
            { id: "2", numero: "1" },
          ],
        },
        {
          id: "4",
          codigo: "MATA07",
          nome: "ÁLGEBRA LINEAR A",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "1" }],
        },
      ],
    },

    {
      numero: "3",
      materias: [
        {
          id: "0",
          codigo: "ENGA47",
          nome: "TECNOLOGIA DOS MATERIAIS PARA A ENGENHARIA ELÉTRICA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "2" },
            { id: "3", numero: "1" },
          ],
        },
        {
          id: "1",
          codigo: "ENGC40",
          nome: "ELETRÔNICA DIGITAL",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "2" }],
        },
        {
          id: "2",
          codigo: "FIS123",
          nome: "FÍSICA GERAL E EXPERIMENTAL III-E",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "2" },
            { id: "3", numero: "2" },
          ],
        },
        {
          id: "3",
          codigo: "MATA04",
          nome: "CÁLCULO C",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "3", numero: "2" },
            { id: "4", numero: "2" },
          ],
        },
        {
          id: "4",
          codigo: "MATA97",
          nome: "MATEMÁTICA DISCRETA II",
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
          codigo: "ENG269",
          nome: "CIÊNCIAS DO AMBIENTE",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "ENGC30",
          nome: "MECÂNICA DOS SÓLIDOS",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "1" },
            { id: "3", numero: "2" },
          ],
        },
        {
          id: "2",
          codigo: "ENGC32",
          nome: "ANÁLISE DE CIRCUITOS I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "3", numero: "2" },
            { id: "4", numero: "2" },
          ],
        },
        {
          id: "3",
          codigo: "MAT236",
          nome: "MÉTODOS ESTATÍSTICOS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "2" }],
        },
        {
          id: "4",
          codigo: "MATA37",
          nome: "INTRODUÇÃO À LÓGICA DE PROGRAMAÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
      ],
    },

    {
      numero: "5",
      materias: [
        {
          id: "0",
          codigo: "ENGC24",
          nome: "SINAIS E SISTEMAS I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "4" },
            { id: "3", numero: "3" },
          ],
        },
        {
          id: "1",
          codigo: "ENGC25",
          nome: "ANALISE DE CIRCUITOS II",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "4" },
            { id: "2", numero: "3" },
            { id: "3", numero: "3" },
          ],
        },
        {
          id: "2",
          codigo: "ENGC41",
          nome: "DISPOSITIVOS ELETRÔNICOS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "4" }],
        },
        {
          id: "3",
          codigo: "ENGG52",
          nome: "LABORATÓRIO INTEGRADO I-A",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "4" },
            { id: "4", numero: "4" },
          ],
        },
        {
          id: "4",
          codigo: "ENGG62",
          nome: "METODOLOGIA E EXPRESSÃO DO CONHECIMENTO CIENTÍFICO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "5",
          codigo: "MATA47",
          nome: "LÓGICA PARA COMPUTAÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "4", numero: "4" },
            { id: "4", numero: "3" },
          ],
        },
      ],
    },

    {
      numero: "6",
      materias: [
        {
          id: "0",
          codigo: "ENG370",
          nome: "FENÔMENOS DE TRANSPORTES I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "2" },
            { id: "3", numero: "3" },
          ],
        },
        {
          id: "1",
          codigo: "ENGC33",
          nome: "SINAIS E SISTEMAS II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "5" }],
        },
        {
          id: "2",
          codigo: "ENGC50",
          nome: "SISTEMAS MICROPROCESSADOS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "3" }],
        },
        {
          id: "3",
          codigo: "MAT174",
          nome: "CÁLCULO NUMÉRICO I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "3", numero: "3" },
            { id: "4", numero: "4" },
          ],
        },
        {
          id: "4",
          codigo: "MATA40",
          nome: "ESTRUTURAS DE DADOS E ALGORITMOS I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "4" }],
        },
      ],
    },

    {
      numero: "7",
      materias: [
        {
          id: "0",
          codigo: "ENGC63",
          nome: "PROCESSAMENTO DIGITAL DE SINAIS",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "6" },
            { id: "2", numero: "6" },
          ],
        },
        {
          id: "1",
          codigo: "ENGG53",
          nome: "LABORATÓRIO INTEGRADO II-A",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "6" },
            { id: "2", numero: "6" },
            { id: "3", numero: "5" },
          ],
        },
        {
          id: "2",
          codigo: "MATA49",
          nome: "PROGRAMAÇÃO DE SOFTWARE BÁSICO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "6" }],
        },
        {
          id: "3",
          codigo: "MATA52",
          nome: "ANÁLISE E PROJETO DE ALGORITMOS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "6" }],
        },
        {
          id: "4",
          codigo: "MATA55",
          nome: "PROGRAMAÇÃO ORIENTADA A OBJETOS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "4" }],
        },
      ],
    },

    {
      numero: "8",
      materias: [
        {
          id: "0",
          codigo: "ENGG54",
          nome: "LABORATÓRIO INTEGRADO III-A",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "7" },
            { id: "1", numero: "7" },
            { id: "2", numero: "7" },
          ],
        },
        {
          id: "1",
          codigo: "ENGG56",
          nome: "PROJETO DE CIRCUITOS INTEGRADOS DIGITAIS",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "5" },
            { id: "2", numero: "6" },
          ],
        },
        {
          id: "2",
          codigo: "MATA51",
          nome: "TEORIA DA COMPUTAÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "3" }],
        },
        {
          id: "3",
          codigo: "MATA58",
          nome: "SISTEMAS OPERACIONAIS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "7" }],
        },
        {
          id: "4",
          codigo: "MATA59",
          nome: "REDES DE COMPUTADORES I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "7" }],
        },
      ],
    },

    {
      numero: "9",
      materias: [
        {
          id: "0",
          codigo: "ENGD33",
          nome: "PROGRAMAÇÃO EM TEMPO REAL PARA SISTEMAS EMBARCADOS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "6" }],
        },
        {
          id: "1",
          codigo: "ENGG57",
          nome: "LABORATÓRIO INTEGRADO IV-A",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "8" },
            { id: "1", numero: "8" },
            { id: "4", numero: "8" },
          ],
        },
        {
          id: "2",
          codigo: "MATA61",
          nome: "COMPILADORES",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "7" }],
        },
        {
          id: "3",
          codigo: "MATA62",
          nome: "ENGENHARIA DE SOFTWARE I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "7" }],
        },
        {
          id: "4",
          codigo: "MATA82",
          nome: "SISTEMAS DE TEMPO REAL",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "3", numero: "8" },
            { id: "4", numero: "8" },
          ],
        },
      ],
    },

    {
      numero: "10",
      materias: [
        {
          id: "0",
          codigo: "ECO151",
          nome: "ECONOMIA E FINANÇAS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "4" }],
        },
        {
          id: "1",
          codigo: "ENGG55",
          nome: "REDES INDUSTRIAIS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "8" }],
        },
        {
          id: "2",
          codigo: "ENGG58",
          nome: "INTERFACE HOMEM-MÁQUINA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "6" }],
        },
      ],
    },

    {
      numero: "11",
      materias: [
        {
          id: "0",
          codigo: "ENGG59",
          nome: "ESTÁGIO EM ENGENHARIA DE COMPUTAÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "8" },
            { id: "2", numero: "10" },
            { id: "4", numero: "9" },
          ],
        },
        {
          id: "1",
          codigo: "ENGG60",
          nome: "TRABALHO DE CONCLUSÃO DO CURSO DE ENG DE COMPUTAÇÃO I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "8" },
            { id: "2", numero: "10" },
            { id: "4", numero: "9" },
          ],
        },
      ],
    },

    {
      numero: "12",
      materias: [
        {
          id: "0",
          codigo: "ADM012",
          nome: "ADMINISTRACAO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "DIR175",
          nome: "LEGISLAÇÃO SOCIAL",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "ENGG61",
          nome: "TRABALHO DE CONCLUSÃO DO CURSO DE ENG DE COMPUTAÇÃO II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "11" }],
        },
      ],
    },
  ],
};
