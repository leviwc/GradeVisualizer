import { GradeState } from "../../components/materia";
export const servico_social = {
  semestre: [
    {
      numero: "1",
      materias: [
        {
          id: "0",
          codigo: "FCH265",
          nome: "SOCIOLOGIA DA DESIG SOCIAL",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "FCHF17",
          nome: "POLÍTICA ESTADO E SOCIEDADE",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "IPSB68",
          nome: "INTRODUÇÃO AO SERVIÇO SOCIAL",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "IPSB75",
          nome: "EPISTEMOLOGIA E METODOLOGIA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "IPSB82",
          nome: "O SERVIÇO SOCIAL E A QUESTÃO SOCIAL",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "5",
          codigo: "LETA09",
          nome: "OFICINA DE LEITURA E PRODUÇÃO DE TEXTOS",
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
          codigo: "IPSB78",
          nome: "FUNDAMENTOS HISTÓRICOS E TEÓRICO-METODOLÓGICOS DO S.S. I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "IPSB80",
          nome: "PSICOLOGIA SOCIAL",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "IPSB81",
          nome: "TRABALHO E SOCIABILIDADE",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "IPSC09",
          nome: "DIVERSID. DE GÊNERO RAÇA ETNIA NO CONTEXT. DIR.HUMANOS",
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
          codigo: "IPSB79",
          nome: "SERVIÇO SOCIAL E PROCESSOS DE TRABALHO I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "IPSB83",
          nome: "FUNDAMENTOS HISTÓRICOS E TEÓRICOS-METODOLÓGICOS DO S.S. II",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "IPSB85",
          nome: "FORMAÇÕES ECONÔMICAS E SOCIAIS DO BRASIL",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "IPSB86",
          nome: "POLÍTICA SOCIAL",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "IPSB90",
          nome: "TRABALHO PROFISSIONAL ESTADO MERCADO E TERCEIRO SETOR",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "5",
          codigo: "IPSB95",
          nome: "ÉTICA PROFISSIONAL",
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
          codigo: "IPSB84",
          nome: "SERVIÇO SOCIAL E PROCESSOS DE TRABALHO II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "3" }],
        },
        {
          id: "1",
          codigo: "IPSB87",
          nome: "PESQUISA E SERVIÇO SOCIAL I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "IPSB89",
          nome: "OFICINA DE ANÁLISE DO TRABALHO PROFISSIONAL",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "3" }],
        },
        {
          id: "3",
          codigo: "IPSB91",
          nome: "POLÍTICA SOCIAL E QUESTÃO SOCIAL NO BRASIL",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "MAT021",
          nome: "ESTATISTICA I B",
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
          codigo: "IPSB69",
          nome: "CONHECIMENTO CIENTÍFICO E VIDA SOCIAL",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "IPSB92",
          nome: "PESQUISA E SERVIÇO SOCIAL II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "4" }],
        },
        {
          id: "2",
          codigo: "IPSB93",
          nome: "OFICINA DE PLANEJAMENTO DO TRABALHO PROFISSIONAL",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "IPSB94",
          nome: "SAÚDE E TRABALHO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "IPSB96",
          nome: "ESTÁGIO SUPERVISIONADO EM SERVIÇO SOCIAL I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "4" }],
        },
        {
          id: "5",
          codigo: "IPSB97",
          nome: "DIREITO E LEGISLAÇÃO SOCIAL",
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
          codigo: "IPSB98",
          nome: "OFICINA DE ABORDAGENS E TÉCNICAS DO TRABALHO PROFISSIONAL",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "IPSB99",
          nome: "TRABALHO PROFISSIONAL E POLÍTICA DE SAÚDE",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "3" }],
        },
        {
          id: "2",
          codigo: "IPSC01",
          nome: "GESTÃO E SERVIÇO SOCIAL",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "IPSC02",
          nome: "ESTÁGIO SUPERVISIONADO EM SERVIÇO SOCIAL II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "5" }],
        },
        {
          id: "4",
          codigo: "IPSC03",
          nome: "TRAB PROF E POLÍTICA DE ASSISTÊNCIA SOCIAL E PREVIDÊNCIA",
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
          codigo: "IPSC04",
          nome: "FUNDAMENTOS HISTÓRICOS E TEÓRICOS-METODOLÓGICOS DO S.S. III",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "IPSC05",
          nome: "ORIENTAÇÃO DE MONOGRAFIA I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "4" }],
        },
        {
          id: "2",
          codigo: "IPSC06",
          nome: "POLÍTICAS PÚBLICAS E DIREITOS SOCIAIS NO BRASIL",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "3" }],
        },
        {
          id: "3",
          codigo: "IPSC07",
          nome: "ESTÁGIO SUPERVISIONADO EM SERVIÇO SOCIAL III",
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
          codigo: "IPSC08",
          nome: "ORIENTAÇÃO DE MONOGRAFIA II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "7" }],
        },
        {
          id: "1",
          codigo: "IPSC35",
          nome: "PSICOLOGIA E SAÚDE",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
      ],
    },
  ],
};
