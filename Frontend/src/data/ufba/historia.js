import { GradeState } from "../../components/materia";
export const historia = {
  semestre: [
    {
      numero: "1",
      materias: [
        {
          id: "0",
          codigo: "EDCA01",
          nome: "FUNDAMENTOS PSICOLÓGICOS DA EDUCAÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "EDCA02",
          nome: "ORGANIZAÇÃO DA EDUCAÇÃO BRASILEIRA II",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "FCH014",
          nome: "HISTÓRIA ANTIGA I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "FCH024",
          nome: "INTRODUÇÃO AO ESTUDO DA HISTÓRIA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "FCHD95",
          nome: "INTRODUÇÃO AO TRABALHO ACADÊMICO",
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
          codigo: "EDCA11",
          nome: "DIDÁTICA E PRAXIS PEDAGÓGICA I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "1" }],
        },
        {
          id: "1",
          codigo: "FCH015",
          nome: "HISTÓRIA ANTIGA II",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "FCH176",
          nome: "HISTORIOGRAFIA I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "FCHG06",
          nome: "HISTÓRIA INDÍGENA E DO INDIGENISMO",
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
          codigo: "EDCA12",
          nome: "DIDÁTICA E PRAXIS PEDAGÓGICA II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "2" }],
        },
        {
          id: "1",
          codigo: "FCH016",
          nome: "HISTÓRIA MEDIEVAL I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "FCHD90",
          nome: "HISTÓRIA DA ÁFRICA I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "FCHD94",
          nome: "SEMINÁRIO TEMÁTICO",
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
          codigo: "EDCB31",
          nome: "DIDÁTICA E PRAXIS PEDAGÓGICA DE HISTÓRIA I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "3" }],
        },
        {
          id: "1",
          codigo: "FCH017",
          nome: "HISTÓRIA MEDIEVAL II",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "FCH431",
          nome: "HISTÓRIA IBÉRICA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "FCHD91",
          nome: "HISTÓRIA DA ÁFRICA II",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "LETE46",
          nome: "LIBRAS-LÍNGUA BRASILEIRA DE SINAIS",
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
          codigo: "FCH018",
          nome: "HISTÓRIA MODERNA I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "FCH184",
          nome: "HISTÓRIA DO BRASIL I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "FCH189",
          nome: "HISTÓRIA DA BAHIA I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "FCH440",
          nome: "HISTÓRIA DA AMÉRICA I-A",
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
          codigo: "FCH020",
          nome: "HISTÓRIA MODERNA II",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "FCH185",
          nome: "HISTÓRIA DO BRASIL II",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "FCH196",
          nome: "HISTÓRIA DA BAHIA II",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "FCH441",
          nome: "HISTÓRIA DA AMÉRICA II-A",
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
          codigo: "EDCB32",
          nome: "DIDÁTICA E PRAXIS PEDAGÓGICA DE HISTÓRIA II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "4" }],
        },
        {
          id: "1",
          codigo: "FCH019",
          nome: "HISTÓRIA CONTEMPORÂNEA I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "FCH190",
          nome: "HISTÓRIA DO BRASIL III",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "FCH432",
          nome: "HISTÓRIA DA AMÉRICA III",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "FCHD97",
          nome: "ESTUDOS MONOGRÁFICOS I",
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
          codigo: "FCH023",
          nome: "HISTÓRIA CONTEMPORÂNEA II",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "FCH192",
          nome: "HISTORIOGRAFIA II",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "FCH287",
          nome: "HISTÓRIA DO BRASIL IV",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "FCHD98",
          nome: "ESTUDOS MONOGRÁFICOS II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "7" }],
        },
      ],
    },
  ],
};
