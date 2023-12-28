import { GradeState } from "../../components/materia";
export const biblioteconomia_noturno = {
  semestre: [
    {
      numero: "1",
      materias: [
        {
          id: "0",
          codigo: "ICSA02",
          nome: "MORFOLOGIA HUMANA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "ICSA04",
          nome: "BIOSSEGURANÇA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "ICSA06",
          nome: "FUNDAMENTOS DE BIOTECNOLOGIA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "ICSF14",
          nome: "BIOLOGIA CELULAR ANIMAL",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "ICSG46",
          nome: "BIOESTATÍSTICA E PLANEJAMENTO EXPERIMENTAL",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "5",
          codigo: "QUIB17",
          nome: "QUÍMICA FUNDAMENTAL",
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
          codigo: "ICSA07",
          nome: "BIOÉTICA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "ICSA08",
          nome: "BIOLOGIA CELULAR VEGETAL",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "ICSA10",
          nome: "METODOLOGIA CIENTÍFICA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "ICSA18",
          nome: "GENÉTICA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "ICSG34",
          nome: "AÇÃO EXTENSIONISTA I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "5",
          codigo: "LETA15",
          nome: "LEITURA DE TEXTOS EM LINGUA INGLESA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "6",
          codigo: "QUIB33",
          nome: "QUÍMICA ORGÂNICA",
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
          codigo: "ICS028",
          nome: "MICROBIOLOGIA I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "ICSA11",
          nome: "HISTOLOGIA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "ICSA13",
          nome: "BIOQUÍMICA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "6", numero: "2" }],
        },
        {
          id: "3",
          codigo: "ICSA15",
          nome: "PARASITOLOGIA APLICADA À BIOTECNOLOGIA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "ICSA19",
          nome: "EMBRIOLOGIA E CÉLULAS TRONCO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "5",
          codigo: "ICSG35",
          nome: "AÇÃO EXTENSIONISTA II",
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
          codigo: "ICSA12",
          nome: "BIOFÍSICA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "ICSA14",
          nome: "FISIOLOGIA COMPARADA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "ICSA17",
          nome: "IMUNOLOGIA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "3" },
            { id: "3", numero: "1" },
          ],
        },
        {
          id: "3",
          codigo: "ICSA22",
          nome: "TÉCNICAS DE BIOLOGIA MOLECULAR",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "2" }],
        },
        {
          id: "4",
          codigo: "ICSA23",
          nome: "MÉTODOS ANALÍTICOS EM BIOTECNOLOGIA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "5", numero: "1" }],
        },
        {
          id: "5",
          codigo: "ICSG36",
          nome: "AÇÃO EXTENSIONISTA III",
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
          codigo: "ICSA09",
          nome: "BIOINFORMÁTICA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "2" }],
        },
        {
          id: "1",
          codigo: "ICSA25",
          nome: "MICROBIOLOGIA INDUSTRIAL",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "3" },
            { id: "2", numero: "3" },
          ],
        },
        {
          id: "2",
          codigo: "ICSC35",
          nome: "VIROLOGIA MOLECULAR",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "1" }],
        },
        {
          id: "3",
          codigo: "ICSC36",
          nome: "BIOQUÍMICA E FISIOLOGIA MOLECULAR VEGETAL",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "2" }],
        },
        {
          id: "4",
          codigo: "ICSC50",
          nome: "INOVAÇÃO TECNOLÓGICA E PROPRIEDADE INTELECTUAL",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "5",
          codigo: "ICSG37",
          nome: "AÇÃO EXTENSIONISTA IV",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
      ],
    },

    {
      numero: "6",
      materias: [
        {
          id: "0",
          codigo: "ICSA20",
          nome: "FARMACOLOGIA GERAL",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "3" }],
        },
        {
          id: "1",
          codigo: "ICSA24",
          nome: "BOAS PRÁTICAS DE FABRICAÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "3" },
            { id: "5", numero: "1" },
          ],
        },
        {
          id: "2",
          codigo: "ICSA26",
          nome: "NANOTECNOLOGIA E BIOMATERIAIS",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "ICSA33",
          nome: "TECNOLOGIA DE PROCESSOS FERMENTATIVOS",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "3" },
            { id: "2", numero: "3" },
          ],
        },
        {
          id: "4",
          codigo: "ICSC40",
          nome: "BIOENERGIA E BIOMASSA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "5",
          codigo: "ICSG38",
          nome: "AÇÃO EXTENSIONISTA V",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "6",
          codigo: "ICSG47",
          nome: "ENGENHARIA GENÉTICA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "4" }],
        },
      ],
    },

    {
      numero: "7",
      materias: [
        {
          id: "0",
          codigo: "ICSA29",
          nome: "IMUNODIAGNÓSTICO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "4" }],
        },
        {
          id: "1",
          codigo: "ICSA30",
          nome: "BIOTECNOLOGIA VEGETAL",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "2" }],
        },
        {
          id: "2",
          codigo: "ICSC39",
          nome: "ENZIMAS DE APLICAÇÃO INDUSTRIAL",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "3" }],
        },
        {
          id: "3",
          codigo: "ICSC41",
          nome: "GESTÃO E EMPREENDEDORISMO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "ICSC42",
          nome: "BIOTECNOLOGIA AMBIENTAL",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "5",
          codigo: "ICSC43",
          nome: "ADITIVOS CONSERVANTES E PROMOTORES DE CRESCIMENTO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "6",
          codigo: "ICSG39",
          nome: "AÇÃO EXTENSIONISTA VI",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
      ],
    },

    {
      numero: "8",
      materias: [
        {
          id: "0",
          codigo: "ICSA28",
          nome: "BIOTECNOLOGIA DOS ALIMENTOS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "5", numero: "7" }],
        },
        {
          id: "1",
          codigo: "ICSA31",
          nome: "RADIOISÓTOPOS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "4" }],
        },
        {
          id: "2",
          codigo: "ICSA32",
          nome: "TECNOLOGIA DE DESENVOLVIMENTO DE VACINAS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "4" }],
        },
        {
          id: "3",
          codigo: "ICSA34",
          nome: "DESENVOLVIMENTO DE PRODUTOS E PROJETOS BIOTECNOLÓGICOS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "1" }],
        },
        {
          id: "4",
          codigo: "ICSA35",
          nome: "CULTURA DE CÉLULAS E TECIDOS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "1" }],
        },
        {
          id: "5",
          codigo: "ICSA40",
          nome: "TRABALHO DE CONCLUSÃO DE CURSO I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "6",
          codigo: "ICSG40",
          nome: "AÇÃO EXTENSIONISTA VII",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
      ],
    },

    {
      numero: "9",
      materias: [
        {
          id: "0",
          codigo: "ICSA41",
          nome: "ESTÁGIO SUPERVISIONADO",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "6" },
            { id: "1", numero: "7" },
            { id: "2", numero: "8" },
            { id: "4", numero: "7" },
          ],
        },
        {
          id: "1",
          codigo: "ICSA42",
          nome: "TRABALHO DE CONCLUSÃO DE CURSO II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "5", numero: "8" }],
        },
        {
          id: "2",
          codigo: "ICSG41",
          nome: "AÇÃO EXTENSIONISTA VIII",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
      ],
    },
  ],
};