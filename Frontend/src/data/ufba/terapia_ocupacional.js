import { GradeState } from "../../components/materia";
export const terapia_ocupacional = {
  semestre: [
    {
      numero: "1",
      materias: [
        {
          id: "0",
          codigo: "BIOA79",
          nome: "GENÉTICA PARA A AREA DE SAUDE",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "FCH006",
          nome: "INTRODUÇÃO SOCIOLOGIA I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "ICS007",
          nome: "ANATOMIA I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "ICSA10",
          nome: "METODOLOGIA CIENTÍFICA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "ISC001",
          nome: "INTRODUÇÃO À SAÚDE COLETIVA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "5",
          codigo: "MEDD40",
          nome: "LABORATÓRIO DE ATIVIDADES E RECURSOS TERAPÊUTICOS",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "6",
          codigo: "MEDD41",
          nome: "ATIVIDADE INTEGRADA I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "7",
          codigo: "MEDD42",
          nome: "TERAPIA OCUPACIONAL - CIÊNCIA E PROFISSÃO",
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
          codigo: "ICSB85",
          nome: "FISIOLOGIA HUMANA BÁSICA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "1" }],
        },
        {
          id: "1",
          codigo: "ICSF98",
          nome: "NEUROANATOMIA APLICADA À REABILITAÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "IPSA77",
          nome: "PSICOLOGIA DO DESENVOLVIMENTO HUMANO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "ISCB09",
          nome: "POLÍTICA PLANEJAMENTO E GESTÃO EM SAÚDE II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "1" }],
        },
        {
          id: "4",
          codigo: "MEDD44",
          nome: "PERSPECTIVAS TEÓRICO-METODOLÓGICAS EM TERAPIA OCUPACIONAL",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "7", numero: "1" }],
        },
        {
          id: "5",
          codigo: "MEDD45",
          nome: "ÁREAS DO DESEMPENHO OCUPACIONAL (AVD TRABALHO E LAZER)",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "6",
          codigo: "MEDD46",
          nome: "ATIVIDADE INTEGRADA II",
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
          codigo: "FCHF12",
          nome: "ANTROPOLOGIA DA SAÚDE",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "1" }],
        },
        {
          id: "1",
          codigo: "ICSB87",
          nome: "CINESIOLOGIA I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "1" },
            { id: "0", numero: "2" },
            { id: "1", numero: "2" },
          ],
        },
        {
          id: "2",
          codigo: "MEDD48",
          nome: "ABORDAGENS GRUPAIS",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "MEDD49",
          nome: "TERAPIA OCUPACIONAL NA ATENÇÃO BÁSICA I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "2" }],
        },
        {
          id: "4",
          codigo: "MEDD50",
          nome: "TERAPIA OCUPACIONAL SOCIAL I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "4", numero: "1" },
            { id: "7", numero: "1" },
          ],
        },
        {
          id: "5",
          codigo: "MEDD51",
          nome: "PROCESSOS CRIATIVOS E RECURSO TERAPÊUTICO OCUPACIONAL",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "6",
          codigo: "MEDD52",
          nome: "ATIVIDADE PRÁTICA INTEGRADA I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "2" }],
        },
        {
          id: "7",
          codigo: "MEDD76",
          nome: "PATOLOGIA GERAL",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "1" },
            { id: "0", numero: "2" },
            { id: "1", numero: "2" },
          ],
        },
      ],
    },

    {
      numero: "4",
      materias: [
        {
          id: "0",
          codigo: "MEDD53",
          nome: "TERAPIA OCUPACIONAL EM SAÚDE MENTAL I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "2" }],
        },
        {
          id: "1",
          codigo: "MEDD54",
          nome: "TERAPIA OCUPACIONAL NA ATENÇÃO AO ENVELHECIMENTO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "2" }],
        },
        {
          id: "2",
          codigo: "MEDD55",
          nome: "ATIVIDADE PRÁTICA INTEGRADA II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "2" }],
        },
        {
          id: "3",
          codigo: "MEDD77",
          nome: "FUNDAMENTOS DE NEUROLOGIA",
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
          codigo: "MEDD56",
          nome: "INICIAÇÃO À PESQUISA CIENTÍFICA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "1" }],
        },
        {
          id: "1",
          codigo: "MEDD57",
          nome: "DEFICIÊNCIA E SOCIEDADE",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "MEDD58",
          nome: "TERAPIA OCUPACIONAL NA ATENÇÃO À CRIANÇA E AO ADOLESCENTE",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "2" },
            { id: "4", numero: "2" },
            { id: "3", numero: "4" },
          ],
        },
        {
          id: "3",
          codigo: "MEDD59",
          nome: "TERAPIA OCUPACIONAL NOS CONTEXTOS EDUCACIONAIS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "2" }],
        },
        {
          id: "4",
          codigo: "MEDD60",
          nome: "ATIVIDADE PRÁTICA INTEGRADA III",
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
          codigo: "MEDD61",
          nome: "TRABALHO DE CONCLUSÃO DE CURSO I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "5" }],
        },
        {
          id: "1",
          codigo: "MEDD62",
          nome: "TERAPIA OCUPACIONAL NA ATENÇÃO À SAÚDE DO ADULTO",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "7", numero: "3" },
            { id: "3", numero: "4" },
          ],
        },
        {
          id: "2",
          codigo: "MEDD63",
          nome: "TERAPIA OCUPACIONAL EM SAÚDE DO TRABALHADOR",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "2" }],
        },
        {
          id: "3",
          codigo: "MEDD64",
          nome: "TECNOLOGIAS ASSISTIVAS E TERAPIA OCUPACIONAL",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "5", numero: "2" },
            { id: "1", numero: "5" },
          ],
        },
        {
          id: "4",
          codigo: "MEDD65",
          nome: "ATIVIDADE PRÁTICA INTEGRADA IV",
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
          codigo: "MEDD66",
          nome: "TRABALHO DE CONCLUSÃO DE CURSO II",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "5" },
            { id: "0", numero: "6" },
          ],
        },
        {
          id: "1",
          codigo: "MEDD67",
          nome: "ESTÁGIO CURRICULAR I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "3", numero: "3" },
            { id: "4", numero: "3" },
            { id: "0", numero: "4" },
            { id: "1", numero: "4" },
            { id: "2", numero: "5" },
            { id: "3", numero: "5" },
            { id: "1", numero: "6" },
            { id: "2", numero: "6" },
            { id: "3", numero: "6" },
          ],
        },
        {
          id: "2",
          codigo: "MEDD75",
          nome: "DESEMPENHO PROFISSIONAL EM TERAPIA OCUPACIONAL",
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
          codigo: "MEDD68",
          nome: "ESTÁGIO CURRICULAR II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "7" }],
        },
      ],
    },
  ],
};
