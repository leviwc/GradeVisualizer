import { GradeState } from "../../components/materia";
export const transporte_terrestre = {
  semestre: [
    {
      numero: "1",
      materias: [
        {
          id: "0",
          codigo: "ENG028",
          nome: "TRANSPORTE PÚBLICO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "ENGJ62",
          nome: "ÉTICA E CIDADANIA NO TRANSPORTE E TRÂNSITO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "ENGJ64",
          nome: "LEGISLAÇÃO DO TRÂNSITO I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "ENGJ74",
          nome: "PLANEJAMENTO INTEGRADO TRANSPORTES TRÂNSITO E USO DO SOLO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "ENGL55",
          nome: "INTRODUÇÃO À TECNOLOGIA EM TRANSPORTES TERRESTRES",
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
          codigo: "ENGA50",
          nome: "TOPOGRAFIA - A",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "1" }],
        },
        {
          id: "1",
          codigo: "ENGJ61",
          nome: "ENGENHARIA DE TRÂNSITO: PLANEJAMENTO E GESTÃO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "1" }],
        },
        {
          id: "2",
          codigo: "ENGJ69",
          nome: "SEGURANÇA DE TRÂNSITO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "1" }],
        },
        {
          id: "3",
          codigo: "ENGJ72",
          nome: "MEIO AMBIENTE-GESTÃO AMBIENTAL E DESENVOLVIMENTO SUSTENTÁVEL",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "1" },
            { id: "3", numero: "1" },
          ],
        },
        {
          id: "4",
          codigo: "ENGJ73",
          nome: "TRANSPORTES PÚBLICOS II-GESTÃO EMPRESARIAL",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "1" },
            { id: "3", numero: "1" },
          ],
        },
      ],
    },

    {
      numero: "3",
      materias: [
        {
          id: "0",
          codigo: "ENGJ59",
          nome: "DIREÇÃO DEFENSIVA E PREVENÇÃO DE ACIDENTES",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "2" }],
        },
        {
          id: "1",
          codigo: "ENGJ60",
          nome: "EDUCAÇÃO PARA O TRÂNSITO E CAMPANHAS EDUCATIVAS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "2" }],
        },
        {
          id: "2",
          codigo: "ENGJ63",
          nome: "GESTÃO DA QUALIDADE EM TRANSPORTES",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "2" }],
        },
        {
          id: "3",
          codigo: "ENGJ67",
          nome: "OPERAÇÃO FISCALIZAÇÃO E POLICIAMENTO DE TRANSP. E TRÂNSITO",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "1" },
            { id: "1", numero: "2" },
            { id: "2", numero: "1" },
          ],
        },
        {
          id: "4",
          codigo: "ENGL54",
          nome: "PROJETO GEOMÉTRICO DE VIAS URBANAS",
          state: GradeState.NEUTRAL,
          dependencias: [
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
          codigo: "ENGJ66",
          nome: "LEVANTAMENTOS E PESQUISAS DE TRANSPORTE E TRÁFEGO",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "1" },
            { id: "1", numero: "2" },
          ],
        },
        {
          id: "1",
          codigo: "ENGJ68",
          nome: "PERÍCIA EM ACIDENTES DE TRÂNSITO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "2" }],
        },
        {
          id: "2",
          codigo: "ENGJ70",
          nome: "PROJETO DE SINALIZAÇÃO VIÁRIA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "3" }],
        },
        {
          id: "3",
          codigo: "ENGJ71",
          nome: "PLANEJAMENTO E GESTÃO DO TRANSPORTE DE CARGAS PERIGOSAS",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "2" },
            { id: "2", numero: "2" },
          ],
        },
      ],
    },

    {
      numero: "5",
      materias: [
        {
          id: "0",
          codigo: "ENGJ58",
          nome: "GEOPROCESSAMENTO APLICADO AOS TRANSPORTES",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "1" },
            { id: "0", numero: "2" },
            { id: "1", numero: "2" },
          ],
        },
        {
          id: "1",
          codigo: "ENGJ65",
          nome: "LEGISLAÇÃO DO TRÂNSITO II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "4" }],
        },
      ],
    },

    {
      numero: "6",
      materias: [
        {
          id: "0",
          codigo: "ENGJ76",
          nome: "ESTÁGIO SUPERVISIONADO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
      ],
    },
  ],
};
