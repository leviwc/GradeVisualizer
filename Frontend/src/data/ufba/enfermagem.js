import { GradeState } from "../../components/materia";
export const enfermagem = {
  semestre: [
    {
      numero: "1",
      materias: [
        {
          id: "0",
          codigo: "ENFA84",
          nome: "VIGILÂNCIA EM SAÚDE",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "ENFA86",
          nome: "ENFERMAGEM SAÚDE E SOCIEDADE",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "ENFC27",
          nome: "SEMINÁRIOS DE ÉTICA E BIOÉTICA IA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "ENFD26",
          nome: "URGÊNCIAS E EMERGÊNCIAS NA COMUNIDADE",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "ISCA82",
          nome: "EPIDEMIOLOGIA I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "5",
          codigo: "LETA40",
          nome: "OFICINA DE LEITURA E PRODUÇÃO DE TEXTOS ACADÊMICOS",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "6",
          codigo: "MATD03",
          nome: "ESTATÍSTICA APLICADA À SAÚDE",
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
          codigo: "BIOB09",
          nome: "BIOLOGIA APLICADA A ENFERMAGEM",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "ENFB19",
          nome: "EDUCAÇÃO EM SAÚDE",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "ICS052",
          nome: "BIOQUÍMICA III",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "ICSA97",
          nome: "MICROBIOLOGIA II",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "ICSB23",
          nome: "PARASITOLOGIA HUMANA III",
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
          codigo: "ENFC28",
          nome: "FUNDAMENTOS EM ENFERMAGEM NO CUIDADO INDIVIDUAL I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "ENFC29",
          nome: "FUNDAMENTOS EM ENFERMAGEM NO CUIDADO EM SAÚDE COLETIVA I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "ICSA98",
          nome: "IMUNOLOGIA BÁSICA II",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "ICSB04",
          nome: "ANATOMIA HUMANA APLICADA A ENFERMAGEM",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "ICSB05",
          nome: "FISIOLOGIA HUMANA APLICADA A ENFERMAGEM",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "5",
          codigo: "ICSB06",
          nome: "HISTOLOGIA HUMANA APLICADA A ENFERMAGEM",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "6",
          codigo: "ICSB07",
          nome: "FARMACOLOGIA APLICADA À ENFERMAGEM I",
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
          codigo: "ENFC30",
          nome: "FUNDAMENTOS EM ENFERMAGEM NO CUIDADO INDIVIDUAL II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "3" }],
        },
        {
          id: "1",
          codigo: "ENFC31",
          nome: "FUNDAMENTOS EM ENFERMAGEM NO CUIDADO EM SAÚDE COLETIVA II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "3" }],
        },
        {
          id: "2",
          codigo: "ENFC32",
          nome: "METODOLOGIA DO TRABALHO CIENTÍFICO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "ICS066",
          nome: "BIOFISICA IV",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "NUT150",
          nome: "INTRODUÇÃO À NUTRIÇÃO",
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
          codigo: "ENFA91",
          nome: "CUIDADO EM ENFERMAGEM À PESSOA NO CONTEXTO HOSPITALAR",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "3" },
            { id: "0", numero: "4" },
          ],
        },
        {
          id: "1",
          codigo: "ENFC33",
          nome: "METODOLOGIA DA PESQUISA I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "ENFC34",
          nome: "SEMINÁRIOS DE ÉTICA E BIOÉTICA IIA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "ICSB13",
          nome: "PATOLOGIA GERAL APLICADA À ENFERMAGEM",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "ICSB14",
          nome: "FARMACOLOGIA APLICADA A ENFERMAGEM II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "6", numero: "3" }],
        },
        {
          id: "5",
          codigo: "IPSC70",
          nome: "PSICOLOGIA APLICADA A SAÚDE",
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
          codigo: "ENFC35",
          nome: "ENFERMAGEM NO CUIDADO À SAÚDE DA MULHER NA ATENÇÃO BÁSICA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "3" },
            { id: "1", numero: "4" },
          ],
        },
        {
          id: "1",
          codigo: "ENFC36",
          nome: "ENFERMAGEM NO CUIDADO À SAÚDE DA CRIANÇA E DO ADOLESCENTE",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "5" }],
        },
        {
          id: "2",
          codigo: "ENFC37",
          nome: "ENFERMAGEM NO CUIDADO À SAÚDE MENTAL I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "ENFC38",
          nome: "METODOLOGIA DA PESQUISA II",
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
          codigo: "ENFA97",
          nome: "ENFERMAGEM NO CUIDADO À SAÚDE DA PESSOA IDOSA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "5" }],
        },
        {
          id: "1",
          codigo: "ENFC39",
          nome: "ATIVIDADE DE PESQUISA TCC I A",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "ENFC40",
          nome: "CUID EM ENF À PESSOA NO CONT HOSP EM SIT DE URG E EMERGÊNCIA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "5" }],
        },
        {
          id: "3",
          codigo: "ENFC41",
          nome: "SEMINÁRIOS DE ÉTICA E BIOÉTICA III",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "ENFC42",
          nome: "ENFERMAGEM NO CUIDADO À MULHER NO PARTO E PUERPÉRIO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "6" }],
        },
      ],
    },

    {
      numero: "8",
      materias: [
        {
          id: "0",
          codigo: "ENFC43",
          nome: "GESTÃO E EDUCAÇÃO PERMANENTE EM SAÚDE E ENFERMAGEM",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "ENFC44",
          nome: "ATIVIDADE DE PESQUISA TCC II A",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "7" }],
        },
      ],
    },

    {
      numero: "9",
      materias: [
        {
          id: "0",
          codigo: "ENFB20",
          nome: "ESTÁGIO CURRICULAR I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
      ],
    },

    {
      numero: "10",
      materias: [
        {
          id: "0",
          codigo: "ENFB21",
          nome: "ESTÁGIO CURRICULAR II",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
      ],
    },
  ],
};
