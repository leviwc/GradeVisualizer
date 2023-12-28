import { GradeState } from "../../components/materia";
export const nutricao = {
  semestre: [
    {
      numero: "1",
      materias: [
        {
          id: "0",
          codigo: "BIO007",
          nome: "INTRODUÇÃO A BIOLOGIA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "ICS007",
          nome: "ANATOMIA I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "ICS026",
          nome: "HISTOLOGIA I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "ICS067",
          nome: "BIOQUIMICA APLIC.NUTRICAO I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "QUI001",
          nome: "COMPLEMENTOS DE QUIMICA I",
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
          codigo: "ICS021",
          nome: "FISIOLOGIA I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "1" },
            { id: "1", numero: "1" },
          ],
        },
        {
          id: "1",
          codigo: "ICS028",
          nome: "MICROBIOLOGIA I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "ICS046",
          nome: "PARASITOLOGIA HUMANA I-A",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "ICS068",
          nome: "BIOQUIMICA APLIC.NUTRICAO II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "1" }],
        },
        {
          id: "4",
          codigo: "QUI032",
          nome: "QUIMICA ANALITICA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "1" }],
        },
      ],
    },

    {
      numero: "3",
      materias: [
        {
          id: "0",
          codigo: "ECO001",
          nome: "FUNDAMENTOS DE ECONOMIA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "FAR158",
          nome: "MICROBIOLOGIA DOS ALIMENTOS II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "2" }],
        },
        {
          id: "2",
          codigo: "MAT027",
          nome: "ESTATÍSTICA IV",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "NUT148",
          nome: "INT A METODL DE PESQ EM NUTRIC",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "NUT152",
          nome: "TÉCNICA DIETÉTICA I",
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
          codigo: "ADM001",
          nome: "INTRODUCÃO À ADMINISTRACAO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "FAR136",
          nome: "BROMATOLOGIA I-A",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "3", numero: "2" },
            { id: "4", numero: "2" },
          ],
        },
        {
          id: "2",
          codigo: "FCH006",
          nome: "INTRODUÇÃO SOCIOLOGIA I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "IPSA39",
          nome: "PSICOLOGIA DAS RELACOES HUMANAS",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "ISC002",
          nome: "EPIDEMIOLOGIA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "3" }],
        },
      ],
    },

    {
      numero: "5",
      materias: [
        {
          id: "0",
          codigo: "ENG027",
          nome: "SANEAMENTO E SAUDE",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "4" }],
        },
        {
          id: "1",
          codigo: "NUT154",
          nome: "NUTRICAO NORMAL III",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "2" },
            { id: "3", numero: "2" },
            { id: "4", numero: "3" },
          ],
        },
        {
          id: "2",
          codigo: "NUT155",
          nome: "ADM SAUDE PUB EM SERV NUTRICAO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "4" }],
        },
        {
          id: "3",
          codigo: "NUT156",
          nome: "DESENV COMUNID E COMUNICACAO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "4" }],
        },
        {
          id: "4",
          codigo: "NUTB06",
          nome: "ADMINISTRAÇÃO DE SERVIÇOS DE ALIMENTAÇÃO COLETIVA I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "4" }],
        },
      ],
    },

    {
      numero: "6",
      materias: [
        {
          id: "0",
          codigo: "ICS019",
          nome: "PROCESSOS GERAIS DE PATOLOGIA I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "2" },
            { id: "1", numero: "2" },
          ],
        },
        {
          id: "1",
          codigo: "NUT123",
          nome: "TECNOLOGIA DOS ALIMENTOS II",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "4" },
            { id: "1", numero: "3" },
          ],
        },
        {
          id: "2",
          codigo: "NUT129",
          nome: "TOXICOLOGIA DOS ALIMENTOS",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "4" },
            { id: "1", numero: "3" },
          ],
        },
        {
          id: "3",
          codigo: "NUT143",
          nome: "AVALIACAO NUTRICIONAL",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "5" }],
        },
        {
          id: "4",
          codigo: "NUT157",
          nome: "NUTRICAO NORMAL IV",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "5" }],
        },
        {
          id: "5",
          codigo: "NUTB07",
          nome: "ADMINISTRAÇÃO EM SERVIÇOS DE ALIMENTAÇÃO COLETIVA II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "5" }],
        },
      ],
    },

    {
      numero: "7",
      materias: [
        {
          id: "0",
          codigo: "NUT124",
          nome: "HIGIENE E INSP DOS ALIMENTOS I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "6" }],
        },
        {
          id: "1",
          codigo: "NUT132",
          nome: "TECN ESP CONSERV DOS ALIMENTOS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "6" }],
        },
        {
          id: "2",
          codigo: "NUT136",
          nome: "NUTRICAO E MATERNO INFANTIL",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "3", numero: "6" },
            { id: "4", numero: "6" },
          ],
        },
        {
          id: "3",
          codigo: "NUT137",
          nome: "PATOLOGIA DA NUTRIÇÃO E DIETOTERAPIA I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "6" },
            { id: "3", numero: "6" },
            { id: "4", numero: "6" },
          ],
        },
      ],
    },

    {
      numero: "8",
      materias: [
        {
          id: "0",
          codigo: "NUT138",
          nome: "PATOLOGIA NUTRIÇÃO E DIETOTERAPIA II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "7" }],
        },
        {
          id: "1",
          codigo: "NUT144",
          nome: "EDUCACAO NUTRICIONAL",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "3", numero: "4" },
            { id: "4", numero: "6" },
          ],
        },
        {
          id: "2",
          codigo: "NUT158",
          nome: "TECNICA DIETETICA II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "7" }],
        },
        {
          id: "3",
          codigo: "NUT171",
          nome: "NUTRICAO EM SAUDE PUBLICA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "7" },
            { id: "2", numero: "5" },
          ],
        },
        {
          id: "4",
          codigo: "NUT176",
          nome: "PLANEJAMENTO ALIM P/ COLETIVID",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "3", numero: "6" },
            { id: "2", numero: "5" },
            { id: "4", numero: "6" },
          ],
        },
      ],
    },

    {
      numero: "9",
      materias: [
        {
          id: "0",
          codigo: "NUT141",
          nome: "DEONTOLOGIA DA NUTRICAO",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "3", numero: "4" },
            { id: "0", numero: "8" },
          ],
        },
        {
          id: "1",
          codigo: "NUT172",
          nome: "DIETOTERAPIA APLICADA I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "7" },
            { id: "0", numero: "8" },
            { id: "1", numero: "8" },
          ],
        },
        {
          id: "2",
          codigo: "NUTA01",
          nome: "TRABALHO DE CONCLUSÃO DE CURSO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "NUTB08",
          nome: "ADMINISTRAÇÃO DE SERVIÇOS DE ALIMENTAÇÃO COLETIVA III",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "7" },
            { id: "4", numero: "8" },
            { id: "5", numero: "6" },
          ],
        },
      ],
    },

    {
      numero: "10",
      materias: [
        {
          id: "0",
          codigo: "NUT160",
          nome: "ESTÁGIO EM NUTRIÇÃO CLÍNICA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "NUT163",
          nome: "ESTÁGIO EM NUTRIÇÃO SOCIAL",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "NUTA02",
          nome: "ESTÁGIO EM ADM EM SERVIÇOS DE ALIMENT E NUTRI PARA COLETIVI",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
      ],
    },
  ],
};
