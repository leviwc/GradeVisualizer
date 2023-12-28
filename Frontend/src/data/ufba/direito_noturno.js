import { GradeState } from "../../components/materia";
export const direito_noturno = {
  semestre: [
    {
      numero: "1",
      materias: [
        {
          id: "0",
          codigo: "DIR213",
          nome: "CIÊNCIA POLITICA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "DIRA45",
          nome: "TEORIA DO DIREITO I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "FCH001",
          nome: "INTRODUÇÃO À FILOSOFIA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "FCH007",
          nome: "INTRODUCAO SOCIOLOGIA II",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "FCH124",
          nome: "ANTROPOLOGIA I",
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
          codigo: "DIRA74",
          nome: "HISTÓRIA DO DIREITO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "1" }],
        },
        {
          id: "1",
          codigo: "DIRA79",
          nome: "TEORIA DA CONSTITUIÇÃO E ORGANIZAÇÃO DO ESTADO",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "1" },
            { id: "1", numero: "1" },
          ],
        },
        {
          id: "2",
          codigo: "DIRA80",
          nome: "SOCIOLOGIA JURÍDICA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "1" },
            { id: "3", numero: "1" },
          ],
        },
        {
          id: "3",
          codigo: "DIRA81",
          nome: "TEORIA DO DIREITO II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "1" }],
        },
        {
          id: "4",
          codigo: "ECOA27",
          nome: "INTRODUÇÃO À ECONOMIA",
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
          codigo: "DIR007",
          nome: "DIREITOS FUNDAMENTAIS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "2" }],
        },
        {
          id: "1",
          codigo: "DIRA75",
          nome: "METODOLOGIA DA PESQUISA EM DIREITO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "2" }],
        },
        {
          id: "2",
          codigo: "DIRA82",
          nome: "TEORIA GERAL DO DIREITO CIVIL I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "1" }],
        },
        {
          id: "3",
          codigo: "DIRA83",
          nome: "TEORIA DO DIREITO PENAL I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "1" }],
        },
        {
          id: "4",
          codigo: "DIRA84",
          nome: "DIREITO CONSTITUCIONAL",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "2" }],
        },
      ],
    },

    {
      numero: "4",
      materias: [
        {
          id: "0",
          codigo: "DIRA85",
          nome: "FILOSOFIA DO DIREITO",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "3" },
            { id: "2", numero: "1" },
          ],
        },
        {
          id: "1",
          codigo: "DIRA86",
          nome: "TEORIA GERAL DO DIREITO CIVIL II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "3" }],
        },
        {
          id: "2",
          codigo: "DIRA87",
          nome: "TEORIA DO PROCESSO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "3" }],
        },
        {
          id: "3",
          codigo: "DIRA88",
          nome: "TEORIA DO DIREITO PENAL II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "3" }],
        },
        {
          id: "4",
          codigo: "DIRA89",
          nome: "CIÊNCIA DAS FINANÇAS E DIREITO FINANCEIRO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "2" }],
        },
      ],
    },

    {
      numero: "5",
      materias: [
        {
          id: "0",
          codigo: "DIR031",
          nome: "DIREITO ADMINISTRATIVO I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "3" }],
        },
        {
          id: "1",
          codigo: "DIR035",
          nome: "DIREITO TRIBUTARIO I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "4" }],
        },
        {
          id: "2",
          codigo: "DIR038",
          nome: "DIREITO PROCESSUAL CIVIL I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "4" }],
        },
        {
          id: "3",
          codigo: "DIR194",
          nome: "DIREITO PENAL III",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "4" }],
        },
        {
          id: "4",
          codigo: "DIRA90",
          nome: "DIREITO DAS OBRIGAÇÕES I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "4" }],
        },
      ],
    },

    {
      numero: "6",
      materias: [
        {
          id: "0",
          codigo: "DIR032",
          nome: "DIREITO ADMINISTRATIVO II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "5" }],
        },
        {
          id: "1",
          codigo: "DIR036",
          nome: "DIREITO TRIBUTARIO II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "5" }],
        },
        {
          id: "2",
          codigo: "DIR039",
          nome: "DIREITO PROCESSUAL CIVIL II-A",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "5" }],
        },
        {
          id: "3",
          codigo: "DIR195",
          nome: "DIREITO PENAL IV",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "5" }],
        },
        {
          id: "4",
          codigo: "DIRA91",
          nome: "DIREITO DAS OBRIGAÇÕES II",
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
          codigo: "DIR040",
          nome: "DIREITO PROCESSUAL CIVIL III-A",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "6" }],
        },
        {
          id: "1",
          codigo: "DIR043",
          nome: "DIREITO DO TRABALHO I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "6" }],
        },
        {
          id: "2",
          codigo: "DIR049",
          nome: "DIREITO PROCESSUAL PENAL I-A",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "5" }],
        },
        {
          id: "3",
          codigo: "DIR190",
          nome: "HERMENÊUTICA JURIDICA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "6" }],
        },
        {
          id: "4",
          codigo: "DIRA92",
          nome: "CONTRATOS",
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
          codigo: "DIR041",
          nome: "DIREITO PROCESSUAL CIVIL IV",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "7" }],
        },
        {
          id: "1",
          codigo: "DIR044",
          nome: "DIREITO PROCESSUAL DO TRABALHO I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "7" }],
        },
        {
          id: "2",
          codigo: "DIR050",
          nome: "DIREITO PROCESSUAL PENAL II-A",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "5" }],
        },
        {
          id: "3",
          codigo: "DIR192",
          nome: "DIREITOS REAIS I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "4" }],
        },
        {
          id: "4",
          codigo: "DIRA93",
          nome: "PRÁTICA JURÍDICA CÍVEL I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "6" }],
        },
      ],
    },

    {
      numero: "9",
      materias: [
        {
          id: "0",
          codigo: "DIR015",
          nome: "DIREITO DE FAMíLIA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "6" }],
        },
        {
          id: "1",
          codigo: "DIR046",
          nome: "DIREITO INTERNACIONAL PÚBLICO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "5" }],
        },
        {
          id: "2",
          codigo: "DIR063",
          nome: "DIREITO AGRÁRIO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "8" }],
        },
        {
          id: "3",
          codigo: "DIRA94",
          nome: "PRÁTICA JURÍDICA CÍVEL II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "8" }],
        },
        {
          id: "4",
          codigo: "DIRA95",
          nome: "DIREITO EMPRESARIAL",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "7" }],
        },
      ],
    },

    {
      numero: "10",
      materias: [
        {
          id: "0",
          codigo: "DIR016",
          nome: "DIREITO DAS SUCESSÕES",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "9" }],
        },
        {
          id: "1",
          codigo: "DIR034",
          nome: "DIREITO AMBIENTAL",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "6" }],
        },
        {
          id: "2",
          codigo: "DIRA76",
          nome: "DIREITO SOCIETÁRIO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "9" }],
        },
        {
          id: "3",
          codigo: "DIRA77",
          nome: "PRÁTICA JURÍDICA PENAL",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "8" }],
        },
        {
          id: "4",
          codigo: "DIRA78",
          nome: "PRÁTICA JURÍDICA TRABALHISTA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "8" }],
        },
      ],
    },

    {
      numero: "11",
      materias: [
        {
          id: "0",
          codigo: "DIRA96",
          nome: "TRABALHO DE CONCLUSÃO DE CURSO I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "7" },
            { id: "1", numero: "3" },
          ],
        },
      ],
    },

    {
      numero: "12",
      materias: [
        {
          id: "0",
          codigo: "DIR189",
          nome: "ETICA GERAL E PROFISSIONAL",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "9" }],
        },
        {
          id: "1",
          codigo: "DIRA97",
          nome: "TRABALHO DE CONCLUSÃO DE CURSO II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "11" }],
        },
      ],
    },
  ],
};
