import { GradeState } from "../../components/materia";
export const zootecnia = {
  semestre: [
    {
      numero: "1",
      materias: [
        {
          id: "0",
          codigo: "MEVA40",
          nome: "QUÍMICA GERAL ANALÍTICA E ORGÂNICA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "MEVA41",
          nome: "MATEMÁTICA APLICADA À ZOOTECNIA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "MEVA42",
          nome: "BIOLOGIA CELULAR",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "MEVA43",
          nome: "INTRODUÇÃO À ZOOTECNIA E ÉTICA PROFISSIONAL",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "MEVA44",
          nome: "ANATOMIA DOS ANIMAIS DOMÉSTICOS",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "5",
          codigo: "MEVA45",
          nome: "MINHOCULTURA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "6",
          codigo: "MEVA46",
          nome: "MORFOLOGIA E SISTEMÁTICA VEGETAL",
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
          codigo: "MEVA47",
          nome: "ESTATÍSTICA BÁSICA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "MEVA48",
          nome: "BIOQUÍMICA ANIMAL",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "1" }],
        },
        {
          id: "2",
          codigo: "MEVA50",
          nome: "METODOLOGIA DA PESQUISA EM ZOOTECNIA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "MEVA51",
          nome: "GENÉTICA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "MEVA52",
          nome: "APICULTURA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "5",
          codigo: "MEVA53",
          nome: "FUNDAMENTOS DA CIÊNCIA DO SOLO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "6",
          codigo: "MEVA54",
          nome: "HISTOLOGIA E EMBRIOLOGIA ANIMAL",
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
          codigo: "MEVA55",
          nome: "MICROBIOLOGIA E IMUNOLOGIA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "MEVA56",
          nome: "FERTILIDADE DO SOLO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "5", numero: "2" }],
        },
        {
          id: "2",
          codigo: "MEVA57",
          nome: "PARASITOLOGIA ANIMAL",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "MEVA58",
          nome: "FISIOLOGIA ANIMAL",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "MEVA59",
          nome: "EXPERIMENTAÇÃO ZOOTÉCNICA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "2" }],
        },
        {
          id: "5",
          codigo: "MEVA60",
          nome: "BIOQUÍMICA DO TECIDO ANIMAL",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "2" }],
        },
        {
          id: "6",
          codigo: "MEVA61",
          nome: "FISIOLOGIA VEGETAL",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "6", numero: "1" }],
        },
      ],
    },

    {
      numero: "4",
      materias: [
        {
          id: "0",
          codigo: "MEVA62",
          nome: "PROFILAXIA E HIGIENE ANIMAL",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "MEVA63",
          nome: "DESENHO TÉCNICO E CONSTRUÇÕES RURAIS",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "MEVA65",
          nome: "COMPETITIVIDADE INOVAÇÃO E EMPREENDEDORISMO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "MEVA66",
          nome: "PLANTAS FORRAGEIRAS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "6", numero: "1" }],
        },
        {
          id: "4",
          codigo: "MEVA67",
          nome: "NUTRIÇÃO ANIMAL BÁSICA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "2" }],
        },
        {
          id: "5",
          codigo: "MEVA68",
          nome: "TECNOLOGIA DE PRODUTOS DE ORIGEM ANIMAL",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "6",
          codigo: "MEVA73",
          nome: "ANÁLISE DE ALIMENTOS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "1" }],
        },
      ],
    },

    {
      numero: "5",
      materias: [
        {
          id: "0",
          codigo: "MEVA49",
          nome: "CIÊNCIA E GESTÃO AMBIENTAL",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "MEVA64",
          nome: "MECANIZAÇÃO AGROPECUÁRIA E GEOTECNOLOGIA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "MEVA69",
          nome: "ADMINISTRAÇÃO E ECONOMIA RURAL",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "MEVA70",
          nome: "ALIMENTOS E CÁLCULO DE RAÇÕES",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "6", numero: "4" }],
        },
        {
          id: "4",
          codigo: "MEVA71",
          nome: "COMUNICAÇÃO E EXPRESSÃO ORAL",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "5",
          codigo: "MEVA74",
          nome: "FORMAÇÃO E MANEJO DE PASTAGENS",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "3" },
            { id: "3", numero: "3" },
          ],
        },
        {
          id: "6",
          codigo: "MEVA75",
          nome: "GESTÃO DO AGRONEGÓCIO",
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
          codigo: "MEVA72",
          nome: "SOCIOLOGIA RURAL",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "MEVA76",
          nome: "NUTRIÇÃO DE MONOGÁSTRICO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "4" }],
        },
        {
          id: "2",
          codigo: "MEVA77",
          nome: "CONSERVAÇÃO DE FORRAGENS E PRODUÇÃO DE VOLUMOSOS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "5", numero: "5" }],
        },
        {
          id: "3",
          codigo: "MEVA78",
          nome: "REPRODUÇÃO ANIMAL",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "MEVA79",
          nome: "PRINCÍPIOS DE MELHORAMENTO ANIMAL",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "2" }],
        },
        {
          id: "5",
          codigo: "MEVD16",
          nome: "ESTÁGIO SUPERVISIONADO I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
      ],
    },

    {
      numero: "7",
      materias: [
        {
          id: "0",
          codigo: "MEVA80",
          nome: "EXTENSÃO RURAL E COOPERATIVISMO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "MEVA82",
          nome: "PRODUÇÃO E CONSERVAÇÃO DE ANIMAIS SILVESTRES",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "4" }],
        },
        {
          id: "2",
          codigo: "MEVA83",
          nome: "MELHORAMENTO ANIMAL APLICADO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "6" }],
        },
        {
          id: "3",
          codigo: "MEVA84",
          nome: "EXTERIOR E JULGAMENTO DOS ANIMAIS DOMÉSTICOS",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "MEVA85",
          nome: "NUTRIÇÃO DE RUMINANTES",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "4" }],
        },
        {
          id: "5",
          codigo: "MEVA86",
          nome: "BIOCLIMATOLOGIA AMBIÊNCIA COMPORTAMENTO E BEM-ESTAR ANIMAL",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "6",
          codigo: "MEVA87",
          nome: "RECURSOS FORRAGEIROS DA CAATINGA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "5", numero: "5" }],
        },
      ],
    },

    {
      numero: "8",
      materias: [
        {
          id: "0",
          codigo: "MEVA88",
          nome: "AQÜICULTURA DE ÁGUA DOCE",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "6" }],
        },
        {
          id: "1",
          codigo: "MEVA89",
          nome: "BOVINOCULTURA E BUBALINOCULTURA DE CORTE",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "5", numero: "5" },
            { id: "2", numero: "7" },
            { id: "4", numero: "7" },
          ],
        },
        {
          id: "2",
          codigo: "MEVA90",
          nome: "EQÜINOCULTURA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "6" }],
        },
        {
          id: "3",
          codigo: "MEVA91",
          nome: "AVICULTURA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "6" }],
        },
        {
          id: "4",
          codigo: "MEVA92",
          nome: "OVINOCULTURA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "5", numero: "5" },
            { id: "2", numero: "7" },
            { id: "4", numero: "7" },
          ],
        },
        {
          id: "5",
          codigo: "MEVD17",
          nome: "ESTÁGIO SUPERVISIONADO II",
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
          codigo: "MEVA94",
          nome: "BOVINOCULTURA E BUBALINOCULTURA DE LEITE",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "5", numero: "5" },
            { id: "2", numero: "7" },
            { id: "4", numero: "7" },
          ],
        },
        {
          id: "1",
          codigo: "MEVA95",
          nome: "NUTRIÇÃO E PRODUÇÃO DE CÃES E GATOS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "6" }],
        },
        {
          id: "2",
          codigo: "MEVA96",
          nome: "SUINOCULTURA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "6" }],
        },
        {
          id: "3",
          codigo: "MEVA97",
          nome: "CAPRINOCULTURA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "5", numero: "5" },
            { id: "2", numero: "7" },
            { id: "4", numero: "7" },
          ],
        },
        {
          id: "4",
          codigo: "MEVA98",
          nome: "AQÜICULTURA DE ÁGUA SALGADA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "6" }],
        },
        {
          id: "5",
          codigo: "MEVA99",
          nome: "TRABALHO DE CONCLUSÃO DE CURSO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
      ],
    },
  ],
};
