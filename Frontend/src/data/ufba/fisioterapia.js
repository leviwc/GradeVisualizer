import { GradeState } from "../../components/materia";
export const fisioterapia = {
  semestre: [
    {
      numero: "1",
      materias: [
        {
          id: "0",
          codigo: "ICSA05",
          nome: "BIOESTATÍSTICA PLANEJAMENTO EXPERIMENTAL",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "ICSA91",
          nome: "ESTUDO MORFOFUNCIONAL HUMANO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "ICSA92",
          nome: "ANATOMIA APLICADA À FISIOTERAPIA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "ICSB61",
          nome: "BIOQUÍMICA APLICADA À FISIOTERAPIA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "ICSC32",
          nome: "INFORMÁTICA APLICADA À FISIOTERAPIA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "5",
          codigo: "ICSG31",
          nome: "INSTRUMENTAL DE PESQUISA EM FISIOTERAPIA",
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
          codigo: "ICSA93",
          nome: "DEONTOLOGIA E ÉTICA EM FISIOTERAPIA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "ICSB79",
          nome: "PSICOLOGIA APLICADA À FISIOTERAPIA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "ICSB80",
          nome: "GENÉTICA HUMANA E EMBRIOLOGIA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "ICSB81",
          nome: "NEUROANATOMIA APLICADA À FISIOTERAPIA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "1" }],
        },
        {
          id: "4",
          codigo: "ICSB83",
          nome: "INTERAÇÃO MICRORGANISMO-HOSPEDEIRO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "1" }],
        },
        {
          id: "5",
          codigo: "ICSC31",
          nome: "ANTROPOLOGIA DA SAÚDE",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "6",
          codigo: "ISC001",
          nome: "INTRODUÇÃO À SAÚDE COLETIVA",
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
          codigo: "ICSB84",
          nome: "BIOFÍSICA APLICADA À FISIOTERAPIA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "ICSB85",
          nome: "FISIOLOGIA HUMANA BÁSICA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "1" }],
        },
        {
          id: "2",
          codigo: "ICSB86",
          nome: "IMAGENOLOGIA E EXAMES COMPLEMENTARES",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "1" }],
        },
        {
          id: "3",
          codigo: "ICSB87",
          nome: "CINESIOLOGIA I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "1" }],
        },
        {
          id: "4",
          codigo: "ICSB88",
          nome: "ENVOLVIMENTO PRÁTICO ORIENTADO I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "5",
          codigo: "ISCB08",
          nome: "POLÍTICA PLANEJAMENTO E GESTÃO EM SAÚDE I",
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
          codigo: "ICSB89",
          nome: "BIOMECÂNICA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "3" }],
        },
        {
          id: "1",
          codigo: "ICSB90",
          nome: "MOTRICIDADE E DESENVOLVIMENTO HUMANO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "ICSB91",
          nome: "NEUROFISIOLOGIA APLICADA À FISIOTERAPIA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "2" }],
        },
        {
          id: "3",
          codigo: "ICSB92",
          nome: "FISIOPATOLOGIA APLICADA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "3" }],
        },
        {
          id: "4",
          codigo: "ICSB93",
          nome: "CINESIOLOGIA II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "3" }],
        },
        {
          id: "5",
          codigo: "ICSB94",
          nome: "ENVOLVIMENTO PRÁTICO ORIENTADO II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "3" }],
        },
        {
          id: "6",
          codigo: "NUT170",
          nome: "INTRODUÇÃO À NUTRIÇÃO II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "1" }],
        },
      ],
    },

    {
      numero: "5",
      materias: [
        {
          id: "0",
          codigo: "ICS048",
          nome: "FISIOLOGIA DO EXERCÍCIO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "3" }],
        },
        {
          id: "1",
          codigo: "ICSB95",
          nome: "FUNDAMENTOS DE FARMACOLOGIA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "1" }],
        },
        {
          id: "2",
          codigo: "ICSB96",
          nome: "BASES MÉTODOS E TÉCNICAS DE AVALIAÇÃO EM FISIOTERAPIA I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "4" }],
        },
        {
          id: "3",
          codigo: "ICSB97",
          nome: "CINESIOTERAPIA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "3", numero: "3" },
            { id: "4", numero: "4" },
          ],
        },
        {
          id: "4",
          codigo: "ICSB98",
          nome: "FUNDAMENTOS DE ERGONOMIA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "4" }],
        },
        {
          id: "5",
          codigo: "ICSB99",
          nome: "ENVOLVIMENTO PRÁTICO ORIENTADO III",
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
          codigo: "ICSC01",
          nome: "FISIOTERAPIA PREVENTIVA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "3", numero: "5" },
            { id: "5", numero: "5" },
            { id: "6", numero: "2" },
          ],
        },
        {
          id: "1",
          codigo: "ICSC02",
          nome: "ADMINISTRAÇÃO E PLANO DE NEGÓCIOS APLICADOS À FISIOTERAPIA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "ICSC03",
          nome: "FISIOTERAPIA EM ATENÇÃO BÁSICA DE SAÚDE",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "3", numero: "5" },
            { id: "5", numero: "5" },
            { id: "6", numero: "2" },
          ],
        },
        {
          id: "3",
          codigo: "ICSC04",
          nome: "RECURSOS TERAPÊUTICOS MANUAIS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "4" }],
        },
        {
          id: "4",
          codigo: "ICSC05",
          nome: "BASES MÉTODOS E TÉCNICAS DE AVALIAÇÃO EM FISIOTERAPIA II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "5" }],
        },
        {
          id: "5",
          codigo: "ICSC06",
          nome: "FISIOTERAPIA DERMATOFUNCIONAL",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "3", numero: "5" },
            { id: "5", numero: "5" },
          ],
        },
        {
          id: "6",
          codigo: "ICSC07",
          nome: "FISIOTERAPIA APLICADA À CIRURGIA PLÁSTICA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "3", numero: "5" },
            { id: "5", numero: "5" },
          ],
        },
        {
          id: "7",
          codigo: "ICSC08",
          nome: "FISIOTERAPIA APLICADA À GINECOLOGIA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "3", numero: "5" },
            { id: "5", numero: "5" },
          ],
        },
        {
          id: "8",
          codigo: "ICSC09",
          nome: "ÓRTESE E PRÓTESE",
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
          codigo: "ICSC10",
          nome: "FISIOTERAPIA APLICADA À PNEUMOLOGIA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "5" },
            { id: "5", numero: "5" },
          ],
        },
        {
          id: "1",
          codigo: "ICSC11",
          nome: "FISIOTERAPIA APLICADA À NEUROLOGIA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "3", numero: "5" },
            { id: "5", numero: "5" },
          ],
        },
        {
          id: "2",
          codigo: "ICSC12",
          nome: "FISIOTERAPIA APLICADA À PEDIATRIA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "3", numero: "5" },
            { id: "5", numero: "5" },
          ],
        },
        {
          id: "3",
          codigo: "ICSC13",
          nome: "ELETROTERMOFOTOTERAPIA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "3" }],
        },
        {
          id: "4",
          codigo: "ICSC14",
          nome: "FISIOTERAPIA DESPORTIVA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "5" },
            { id: "3", numero: "5" },
            { id: "5", numero: "5" },
          ],
        },
        {
          id: "5",
          codigo: "ICSC16",
          nome: "FISIOTERAPIA APLICADA ÀS DISFUNÇÕES ANGIOLÓGICAS",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "3", numero: "5" },
            { id: "5", numero: "5" },
          ],
        },
        {
          id: "6",
          codigo: "ICSC17",
          nome: "HIDROCINESIOTERAPIA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "5" }],
        },
      ],
    },

    {
      numero: "8",
      materias: [
        {
          id: "0",
          codigo: "ICSC18",
          nome: "FISIOTERAPIA APLICADA À OBSTETRÍCIA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "5", numero: "5" }],
        },
        {
          id: "1",
          codigo: "ICSC19",
          nome: "FISIOTERAPIA EM COMUNIDADES",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "6" },
            { id: "2", numero: "6" },
          ],
        },
        {
          id: "2",
          codigo: "ICSC20",
          nome: "FISIOTERAPIA APLICADA À CARDIOLOGIA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "5" },
            { id: "3", numero: "5" },
          ],
        },
        {
          id: "3",
          codigo: "ICSC21",
          nome: "FISIOTERAPIA APLICADA ÀS DISFUNÇÕES REUMATOLÓGICAS",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "3", numero: "5" },
            { id: "3", numero: "7" },
          ],
        },
        {
          id: "4",
          codigo: "ICSC22",
          nome: "FISIOTERAPIA APLICADA À GERIATRIA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "5" }],
        },
        {
          id: "5",
          codigo: "ICSC23",
          nome: "FISIOTERAPIA APLICADA À ORTOTRAUMATOLOGIA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "3", numero: "5" },
            { id: "3", numero: "7" },
          ],
        },
        {
          id: "6",
          codigo: "ICSG32",
          nome: "FISIOTERAPIA EM TERAPIA INTENSIVA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "5", numero: "5" }],
        },
      ],
    },

    {
      numero: "9",
      materias: [
        {
          id: "0",
          codigo: "ICSC25",
          nome: "TRABALHO DE CONCLUSÃO DE CURSO I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "ICSG29",
          nome: "ESTÁGIO CURRICULAR OBRIGATÓRIO I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "7", numero: "6" },
            { id: "0", numero: "7" },
            { id: "2", numero: "7" },
            { id: "2", numero: "8" },
            { id: "5", numero: "8" },
          ],
        },
      ],
    },

    {
      numero: "10",
      materias: [
        {
          id: "0",
          codigo: "ICSC27",
          nome: "TRABALHO DE CONCLUSÃO DE CURSO II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "9" }],
        },
        {
          id: "1",
          codigo: "ICSG30",
          nome: "ESTÁGIO CURRICULAR OBRIGATÓRIO II",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "8" },
            { id: "1", numero: "9" },
            { id: "6", numero: "8" },
          ],
        },
      ],
    },
  ],
};
