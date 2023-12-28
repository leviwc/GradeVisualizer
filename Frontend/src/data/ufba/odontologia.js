import { GradeState } from "../../components/materia";
export const odontologia = {
  semestre: [
    {
      numero: "1",
      materias: [
        {
          id: "0",
          codigo: "FOF002",
          nome: "HISTOLOGIA BUCAL AVANÇADA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "FOF010",
          nome: "METODOLOGIA DO TRABALHO CIENTIFICO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "FOF029",
          nome: "CIÊNCIAS SOCIAIS APLICADAS À ODONTOLOGIA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "ICS007",
          nome: "ANATOMIA I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "ICS028",
          nome: "MICROBIOLOGIA I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "5",
          codigo: "ICS050",
          nome: "BIOQUIMICA I",
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
          codigo: "BIO158",
          nome: "BIOLOGIA CELULAR E MOLECULAR",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "5", numero: "1" }],
        },
        {
          id: "1",
          codigo: "ICS009",
          nome: "ANATOMIA DA CABECA E DO PESCOCO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "1" }],
        },
        {
          id: "2",
          codigo: "ICS031",
          nome: "MICROBIOLOGIA III",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "1" }],
        },
        {
          id: "3",
          codigo: "ICS040",
          nome: "FISIOLOGIA III-A",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "1" }],
        },
        {
          id: "4",
          codigo: "ICS045",
          nome: "IMUNOLOGIA I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "1" }],
        },
        {
          id: "5",
          codigo: "ICS046",
          nome: "PARASITOLOGIA HUMANA I-A",
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
          codigo: "FOF001",
          nome: "PATOLOGIA I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "2" },
            { id: "4", numero: "2" },
          ],
        },
        {
          id: "1",
          codigo: "FOF147",
          nome: "MATERIAIS ODONTOLOGICOS",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "ICS033",
          nome: "FARMACOLOGIA IV",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "2" }],
        },
        {
          id: "3",
          codigo: "ISC001",
          nome: "INTRODUÇÃO À SAÚDE COLETIVA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "MED146",
          nome: "ODONTOLOGIA LEGAL",
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
          codigo: "FOF003",
          nome: "PATOLOGIA II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "3" }],
        },
        {
          id: "1",
          codigo: "FOF142",
          nome: "FARMACOTERAPIA ODONTOLOGICA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "3" },
            { id: "2", numero: "3" },
          ],
        },
        {
          id: "2",
          codigo: "FOF149",
          nome: "ESCULTURA DENTAL",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "2" }],
        },
        {
          id: "3",
          codigo: "FOF166",
          nome: "RADIOLOGIA BASICA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "2" }],
        },
        {
          id: "4",
          codigo: "FOF169",
          nome: "ODONTOLOGIA EM SAUDE COLETIVA I",
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
          codigo: "FOF004",
          nome: "CARIOLOGIA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "2" },
            { id: "5", numero: "1" },
          ],
        },
        {
          id: "1",
          codigo: "FOF020",
          nome: "ESTOMATOLOGIA I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "4" },
            { id: "3", numero: "4" },
          ],
        },
        {
          id: "2",
          codigo: "FOF103",
          nome: "DENTISTICA I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "4" }],
        },
        {
          id: "3",
          codigo: "FOF160",
          nome: "OCLUSAO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "4" }],
        },
        {
          id: "4",
          codigo: "FOF161",
          nome: "RADIOLOGIA CLINICA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "4" },
            { id: "3", numero: "4" },
          ],
        },
      ],
    },

    {
      numero: "6",
      materias: [
        {
          id: "0",
          codigo: "FOF015",
          nome: "ESTOMATOLOGIA II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "5" }],
        },
        {
          id: "1",
          codigo: "FOF021",
          nome: "PROTESE PARCIAL FIXA I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "5" }],
        },
        {
          id: "2",
          codigo: "FOF022",
          nome: "CIRURGIA I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "5" }],
        },
        {
          id: "3",
          codigo: "FOF104",
          nome: "DENTISTICA II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "5" }],
        },
        {
          id: "4",
          codigo: "FOF167",
          nome: "ENDODONTIA DE LABORATORIO",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "5" },
            { id: "4", numero: "5" },
          ],
        },
        {
          id: "5",
          codigo: "FOF170",
          nome: "ODONTO.SAUDE COLETIVA II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "4" }],
        },
      ],
    },

    {
      numero: "7",
      materias: [
        {
          id: "0",
          codigo: "FOF016",
          nome: "PRÓTESE PARCIAL FIXA II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "6" }],
        },
        {
          id: "1",
          codigo: "FOF023",
          nome: "PRÓTESE PARCIAL REMOVÍVEL I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "6" }],
        },
        {
          id: "2",
          codigo: "FOF024",
          nome: "CIRURGIA II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "6" }],
        },
        {
          id: "3",
          codigo: "FOF141",
          nome: "ORTODONTIA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "3", numero: "5" },
            { id: "4", numero: "5" },
          ],
        },
        {
          id: "4",
          codigo: "FOF162",
          nome: "ENDODONTIA CLINICA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "6" }],
        },
        {
          id: "5",
          codigo: "FOF164",
          nome: "PERIODONTIA I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "5" },
            { id: "2", numero: "5" },
          ],
        },
      ],
    },

    {
      numero: "8",
      materias: [
        {
          id: "0",
          codigo: "FOF140",
          nome: "ODONTOPEDIATRIA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "6" },
            { id: "3", numero: "6" },
          ],
        },
        {
          id: "1",
          codigo: "FOF155",
          nome: "PROTESE TOTAL",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "5" }],
        },
        {
          id: "2",
          codigo: "FOF165",
          nome: "PERIODONTIA II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "5", numero: "7" }],
        },
        {
          id: "3",
          codigo: "FOF171",
          nome: "ODONTOLOGIA EM SAUDE COLETIVA III",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "5", numero: "6" }],
        },
        {
          id: "4",
          codigo: "FOFA51",
          nome: "TRABALHO DE CONCLUSÃO DE CURSO I",
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
          codigo: "FOF018",
          nome: "CLINICA INTEGRADA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "FOF019",
          nome: "ESTAGIO SUPERVISIONADO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "FOFA52",
          nome: "TRABALHO DE CONCLUSÃO DE CURSO II",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
      ],
    },
  ],
};
