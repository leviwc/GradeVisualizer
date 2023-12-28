import { GradeState } from "../../components/materia";
export const direito = {
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
          codigo: "DIRA75",
          nome: "METODOLOGIA DA PESQUISA EM DIREITO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "ECOA27",
          nome: "INTRODUÇÃO À ECONOMIA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "FCH001",
          nome: "INTRODUÇÃO À FILOSOFIA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "5",
          codigo: "FCH007",
          nome: "INTRODUCAO SOCIOLOGIA II",
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
          codigo: "FCH124",
          nome: "ANTROPOLOGIA I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "5",
          codigo: "IPSA01",
          nome: "PSICOLOGIA I",
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
          codigo: "DIRA80",
          nome: "SOCIOLOGIA JURÍDICA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "1" },
            { id: "5", numero: "1" },
          ],
        },
        {
          id: "2",
          codigo: "DIRA84",
          nome: "DIREITO CONSTITUCIONAL",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "2" }],
        },
        {
          id: "3",
          codigo: "DIRA86",
          nome: "TEORIA GERAL DO DIREITO CIVIL II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "2" }],
        },
        {
          id: "4",
          codigo: "DIRA88",
          nome: "TEORIA DO DIREITO PENAL II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "2" }],
        },
        {
          id: "5",
          codigo: "DIRA89",
          nome: "CIÊNCIA DAS FINANÇAS E DIREITO FINANCEIRO",
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
          codigo: "DIR030",
          nome: "TEORIA GERAL DO PROCESSO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "3" }],
        },
        {
          id: "1",
          codigo: "DIR031",
          nome: "DIREITO ADMINISTRATIVO I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "3" }],
        },
        {
          id: "2",
          codigo: "DIR192",
          nome: "DIREITOS REAIS I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "3" }],
        },
        {
          id: "3",
          codigo: "DIR194",
          nome: "DIREITO PENAL III",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "3" }],
        },
        {
          id: "4",
          codigo: "DIRA85",
          nome: "FILOSOFIA DO DIREITO",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "3" },
            { id: "4", numero: "1" },
          ],
        },
        {
          id: "5",
          codigo: "DIRA90",
          nome: "DIREITO DAS OBRIGAÇÕES I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "3" }],
        },
      ],
    },

    {
      numero: "5",
      materias: [
        {
          id: "0",
          codigo: "DIR032",
          nome: "DIREITO ADMINISTRATIVO II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "4" }],
        },
        {
          id: "1",
          codigo: "DIR035",
          nome: "DIREITO TRIBUTARIO I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "5", numero: "4" }],
        },
        {
          id: "2",
          codigo: "DIR038",
          nome: "DIREITO PROCESSUAL CIVIL I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "4" }],
        },
        {
          id: "3",
          codigo: "DIR046",
          nome: "DIREITO INTERNACIONAL PÚBLICO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "4" }],
        },
        {
          id: "4",
          codigo: "DIR195",
          nome: "DIREITO PENAL IV",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "4" }],
        },
        {
          id: "5",
          codigo: "DIRA91",
          nome: "DIREITO DAS OBRIGAÇÕES II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "5", numero: "4" }],
        },
      ],
    },

    {
      numero: "6",
      materias: [
        {
          id: "0",
          codigo: "DIR036",
          nome: "DIREITO TRIBUTARIO II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "5" }],
        },
        {
          id: "1",
          codigo: "DIR039",
          nome: "DIREITO PROCESSUAL CIVIL II-A",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "5" }],
        },
        {
          id: "2",
          codigo: "DIR043",
          nome: "DIREITO DO TRABALHO I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "5", numero: "5" }],
        },
        {
          id: "3",
          codigo: "DIR049",
          nome: "DIREITO PROCESSUAL PENAL I-A",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "5" }],
        },
        {
          id: "4",
          codigo: "DIR190",
          nome: "HERMENÊUTICA JURIDICA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "4" }],
        },
        {
          id: "5",
          codigo: "DIRA92",
          nome: "CONTRATOS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "5", numero: "5" }],
        },
      ],
    },

    {
      numero: "7",
      materias: [
        {
          id: "0",
          codigo: "DIR015",
          nome: "DIREITO DE FAMíLIA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "5", numero: "5" }],
        },
        {
          id: "1",
          codigo: "DIR040",
          nome: "DIREITO PROCESSUAL CIVIL III-A",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "6" }],
        },
        {
          id: "2",
          codigo: "DIR044",
          nome: "DIREITO PROCESSUAL DO TRABALHO I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "6" },
            { id: "2", numero: "6" },
          ],
        },
        {
          id: "3",
          codigo: "DIR050",
          nome: "DIREITO PROCESSUAL PENAL II-A",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "6" }],
        },
        {
          id: "4",
          codigo: "DIRA93",
          nome: "PRÁTICA JURÍDICA CÍVEL I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "6" }],
        },
        {
          id: "5",
          codigo: "DIRA95",
          nome: "DIREITO EMPRESARIAL",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "5", numero: "6" }],
        },
      ],
    },

    {
      numero: "8",
      materias: [
        {
          id: "0",
          codigo: "DIR016",
          nome: "DIREITO DAS SUCESSÕES",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "7" }],
        },
        {
          id: "1",
          codigo: "DIR041",
          nome: "DIREITO PROCESSUAL CIVIL IV",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "7" }],
        },
        {
          id: "2",
          codigo: "DIR045",
          nome: "DIREITO COLETIVO DO TRABALHO E SINDICAL",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "7" }],
        },
        {
          id: "3",
          codigo: "DIRA76",
          nome: "DIREITO SOCIETÁRIO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "5", numero: "7" }],
        },
        {
          id: "4",
          codigo: "DIRA94",
          nome: "PRÁTICA JURÍDICA CÍVEL II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "7" }],
        },
        {
          id: "5",
          codigo: "DIRA96",
          nome: "TRABALHO DE CONCLUSÃO DE CURSO I",
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
          codigo: "DIR034",
          nome: "DIREITO AMBIENTAL",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "5" }],
        },
        {
          id: "1",
          codigo: "DIR189",
          nome: "ETICA GERAL E PROFISSIONAL",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "8" }],
        },
        {
          id: "2",
          codigo: "DIRA78",
          nome: "PRÁTICA JURÍDICA TRABALHISTA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "8" }],
        },
        {
          id: "3",
          codigo: "DIRA97",
          nome: "TRABALHO DE CONCLUSÃO DE CURSO II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "5", numero: "8" }],
        },
      ],
    },

    {
      numero: "10",
      materias: [
        {
          id: "0",
          codigo: "DIRA77",
          nome: "PRÁTICA JURÍDICA PENAL",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "7" }],
        },
      ],
    },
  ],
};
