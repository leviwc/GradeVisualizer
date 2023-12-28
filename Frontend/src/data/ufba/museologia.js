import { GradeState } from "../../components/materia";
export const museologia = {
  semestre: [
    {
      numero: "1",
      materias: [
        {
          id: "0",
          codigo: "EBA001",
          nome: "HISTORIA DA ARTE I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "FCH001",
          nome: "INTRODUÇÃO À FILOSOFIA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "FCH007",
          nome: "INTRODUCAO SOCIOLOGIA II",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "FCH124",
          nome: "ANTROPOLOGIA I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "FCHG23",
          nome: "MUSEOLOGIA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "5",
          codigo: "FCHG24",
          nome: "PESQUISA MUSEOLÓGICA I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "6",
          codigo: "FCHG56",
          nome: "SEMINÁRIOS TEMÁTICOS I",
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
          codigo: "EBA002",
          nome: "HISTORIA DA ARTE II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "1" }],
        },
        {
          id: "1",
          codigo: "EDCA04",
          nome: "SOCIEDADE E EDUCAÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "FCHG37",
          nome: "HISTÓRIA DOS MUSEUS E COLEÇÕES",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "FCHG38",
          nome: "HISTÓRIA E PATRIMÔNIO NA BAHIA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "FCHG40",
          nome: "DOCUMENTAÇÃO MUSEOLÓGICA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "4", numero: "1" },
            { id: "5", numero: "1" },
          ],
        },
        {
          id: "5",
          codigo: "FCHG42",
          nome: "CONSERVAÇÃO DE ACERVOS",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "4", numero: "1" },
            { id: "5", numero: "1" },
          ],
        },
        {
          id: "6",
          codigo: "FCHG85",
          nome: "SEMINÁRIOS TEMÁTICOS II",
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
          codigo: "EBA010",
          nome: "HISTORIA DA ARTE BRASILEIRA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "FCH187",
          nome: "HISTÓRIA DA CIVILIZAÇÃO BRASILEIRA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "FCHG25",
          nome: "PESQUISA MUSEOLÓGICA II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "5", numero: "1" }],
        },
        {
          id: "3",
          codigo: "FCHG39",
          nome: "MUSEOLOGIA CONTEMPORÂNEA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "1" }],
        },
        {
          id: "4",
          codigo: "FCHG41",
          nome: "LABORATÓRIO DE DOCUMENTAÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "2" }],
        },
        {
          id: "5",
          codigo: "FCHG43",
          nome: "LABORATÓRIO DE CONSERVAÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "5", numero: "2" }],
        },
        {
          id: "6",
          codigo: "FCHG55",
          nome: "ESTUDOS DE CULTURA MATERIAL",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "1" }],
        },
        {
          id: "7",
          codigo: "FCHG86",
          nome: "SEMINÁRIOS TEMÁTICOS III",
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
          codigo: "FCHG45",
          nome: "CONCEPÇÃO DE ESPAÇOS MUSEOLÓGICOS",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "4", numero: "2" },
            { id: "5", numero: "2" },
          ],
        },
        {
          id: "1",
          codigo: "FCHG50",
          nome: "ESTÁGIO CURRICULAR I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "FCHG52",
          nome: "TRABALHO DE CONCLUSÃO DE CURSO I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "3" }],
        },
        {
          id: "3",
          codigo: "FCHG87",
          nome: "SEMINÁRIOS TEMÁTICOS IV",
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
          codigo: "FCHG46",
          nome: "EXPOSIÇÃO MUSEOLÓGICA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "4" }],
        },
        {
          id: "1",
          codigo: "FCHG48",
          nome: "AÇÃO CULTURAL E EDUCATIVA COM PATRIMÔNIOS",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "4", numero: "1" },
            { id: "3", numero: "3" },
          ],
        },
        {
          id: "2",
          codigo: "FCHG53",
          nome: "TRABALHO DE CONCLUSÃO DE CURSO II",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "3" },
            { id: "2", numero: "4" },
          ],
        },
        {
          id: "3",
          codigo: "FCHG88",
          nome: "SEMINÁRIOS TEMÁTICOS V",
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
          codigo: "FCH128",
          nome: "CULTURA BRASILEIRA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "FCHG47",
          nome: "LABORATÓRIO DE EXPOGRAFIA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "5" }],
        },
        {
          id: "2",
          codigo: "FCHG49",
          nome: "GESTÃO MUSEOLÓGICA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "4" }],
        },
      ],
    },

    {
      numero: "7",
      materias: [
        {
          id: "0",
          codigo: "FCHG51",
          nome: "ESTÁGIO CURRICULAR II",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "5" },
            { id: "2", numero: "6" },
            { id: "1", numero: "4" },
          ],
        },
        {
          id: "1",
          codigo: "FCHG54",
          nome: "TRABALHO DE CONCLUSÃO DE CURSO III",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "4" },
            { id: "2", numero: "5" },
          ],
        },
      ],
    },
  ],
};
