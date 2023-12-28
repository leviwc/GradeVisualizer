import { GradeState } from "../../components/materia";
export const medicina_veterinaria = {
  semestre: [
    {
      numero: "1",
      materias: [
        {
          id: "0",
          codigo: "ICS002",
          nome: "BIOFISICA II",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "ICS043",
          nome: "HISTOLOGIA E EMBRIOLOGIA DOS ANIMAIS DOMESTICOS",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "ICS055",
          nome: "BIOQUIMICA VETERINARIA I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "MEV100",
          nome: "ANAT ANIMAIS DOMESTICOS I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "MEVB18",
          nome: "ESTATÍSTICA APLICADA À MEDICINA VETERINÁRIA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "5",
          codigo: "MEVB74",
          nome: "INTRODUÇÃO À MEDICINA VETERINÁRIA ÉTICA E LEGISLAÇÃO",
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
          codigo: "BIOA93",
          nome: "BIOLOGIA MOLECULAR E CELULAR APLICADA À MEDICINA VETERINÀRIA",
          state: GradeState.NEUTRAL,
          dependencias: [],
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
          codigo: "ICS056",
          nome: "BIOQUIMICA VETERINARIA II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "1" }],
        },
        {
          id: "3",
          codigo: "MEV101",
          nome: "ANAT ANIMAIS DOMESTIC II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "1" }],
        },
        {
          id: "4",
          codigo: "MEVB22",
          nome: "CIÊNCIA ANIMAL",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "5",
          codigo: "MEVB23",
          nome: "CIÊNCIAS HUMANAS E SOCIAIS APLICADAS",
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
          codigo: "ICS018",
          nome: "PARASITOLOGIA VETERINARIA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "ICS025",
          nome: "FISIOLOGIA DOS ANIMAIS DOMESTICOS",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "1" },
            { id: "2", numero: "2" },
            { id: "3", numero: "2" },
          ],
        },
        {
          id: "2",
          codigo: "ICS035",
          nome: "MICROBIOLOGIA VETERINARIA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "2" }],
        },
        {
          id: "3",
          codigo: "MEV137",
          nome: "AGROSTOLOGIA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "MEVB24",
          nome: "GENÉTICA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "2" }],
        },
        {
          id: "5",
          codigo: "MEVB75",
          nome: "IMUNOLOGIA APLICADA À SAÚDE E A PRODUÇÃO ANIMAL",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "1" },
            { id: "2", numero: "1" },
            { id: "3", numero: "1" },
            { id: "3", numero: "2" },
          ],
        },
      ],
    },

    {
      numero: "4",
      materias: [
        {
          id: "0",
          codigo: "ICS013",
          nome: "FARMACOLOGIA II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "3" }],
        },
        {
          id: "1",
          codigo: "MEV104",
          nome: "NUTRICAO ANIMAL",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "3" }],
        },
        {
          id: "2",
          codigo: "MEV150",
          nome: "PATOLOGIA ANIMAL I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "3" },
            { id: "1", numero: "3" },
            { id: "2", numero: "3" },
          ],
        },
        {
          id: "3",
          codigo: "MEV163",
          nome: "EPIDEMIOLOGIA E ADMINISTRAÇÃO SANITARIA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "3" },
            { id: "2", numero: "3" },
            { id: "4", numero: "1" },
          ],
        },
        {
          id: "4",
          codigo: "MEVB25",
          nome: "MÉTODO DE PESQUISA EM CIÊNCIA ANIMAL",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "5",
          codigo: "MEVB76",
          nome: "MELHORAMENTO ANIMAL",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "4", numero: "1" },
            { id: "4", numero: "3" },
          ],
        },
      ],
    },

    {
      numero: "5",
      materias: [
        {
          id: "0",
          codigo: "MEV115",
          nome: "AVICULTURA SUINOCULTURA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "4" },
            { id: "5", numero: "4" },
          ],
        },
        {
          id: "1",
          codigo: "MEV138",
          nome: "BOVINOCULTURA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "4" },
            { id: "3", numero: "3" },
            { id: "5", numero: "4" },
          ],
        },
        {
          id: "2",
          codigo: "MEV142",
          nome: "CAPRINOCULTURA E OVINOCULTURA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "4" },
            { id: "3", numero: "3" },
            { id: "5", numero: "4" },
          ],
        },
        {
          id: "3",
          codigo: "MEV151",
          nome: "PATOLOGIA ANIMAL II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "4" }],
        },
        {
          id: "4",
          codigo: "MEVA04",
          nome: "SEMIOLOGIA VETERINÁRIA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "4" }],
        },
        {
          id: "5",
          codigo: "MEVB77",
          nome: "ECONOMIA E ADMINISTRAÇÃO APLICADAS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "5", numero: "2" }],
        },
      ],
    },

    {
      numero: "6",
      materias: [
        {
          id: "0",
          codigo: "MEV140",
          nome: "EXTENSAO RURAL",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "5", numero: "2" }],
        },
        {
          id: "1",
          codigo: "MEV161",
          nome: "MEDICINA VETERINÁRIA PREVENTIVA E SAUDE PÚBLICA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "4" }],
        },
        {
          id: "2",
          codigo: "MEVA03",
          nome: "PATOLOGIA CLÍNICA VETERINÁRIA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "4" }],
        },
        {
          id: "3",
          codigo: "MEVB78",
          nome: "PARASITOSE DOS ANIMAIS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "5" }],
        },
        {
          id: "4",
          codigo: "MEVB79",
          nome: "TECNOLOGIA DE PRODUTOS DE ORIGEM ANIMAL",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "3" }],
        },
        {
          id: "5",
          codigo: "MEVB80",
          nome: "FISIOPAT. DA REPRODUÇÃO DOS ANIMAIS DOMÉST.I - FÊMEA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "3", numero: "5" },
            { id: "4", numero: "5" },
          ],
        },
      ],
    },

    {
      numero: "7",
      materias: [
        {
          id: "0",
          codigo: "MEV149",
          nome: "DOENCAS DAS AVES",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "5" }],
        },
        {
          id: "1",
          codigo: "MEVA33",
          nome: "TÉCNICA CIRÚRGICA VETERINÁRIA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "3" },
            { id: "3", numero: "2" },
          ],
        },
        {
          id: "2",
          codigo: "MEVB81",
          nome: "BACTERIOSES DOS ANIMAIS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "5" }],
        },
        {
          id: "3",
          codigo: "MEVB82",
          nome: "VIROSES E MICOSES DOS ANIMAIS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "5" }],
        },
        {
          id: "4",
          codigo: "MEVB83",
          nome: "ANESTESIOLOGIA VETERINÁRIA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "4" }],
        },
        {
          id: "5",
          codigo: "MEVB84",
          nome: "FISIOPAT.DA REPROD.DOS ANIMAIS DOMÉSTICOS II- MACHO",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "3", numero: "5" },
            { id: "4", numero: "5" },
          ],
        },
      ],
    },

    {
      numero: "8",
      materias: [
        {
          id: "0",
          codigo: "MEVA19",
          nome: "TRABALHO DE CONCLUSÃO DE CURSO I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "MEVC21",
          nome: "CLÍNICA MÉDICA DE RUMINANTES",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "3", numero: "5" },
            { id: "2", numero: "6" },
            { id: "4", numero: "5" },
          ],
        },
        {
          id: "2",
          codigo: "MEVC22",
          nome: "CLÍNICA MÉDICA DE CARNÍVOROS DOMÉSTICOS",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "3", numero: "5" },
            { id: "4", numero: "5" },
          ],
        },
        {
          id: "3",
          codigo: "MEVC23",
          nome: "CLÍNICA MÉDICA DE EQUINOS",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "3", numero: "5" },
            { id: "2", numero: "6" },
            { id: "4", numero: "5" },
          ],
        },
      ],
    },

    {
      numero: "9",
      materias: [
        {
          id: "0",
          codigo: "MEV152",
          nome: "TOXICOLOGIA VETERINARIA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "4" }],
        },
        {
          id: "1",
          codigo: "MEVA20",
          nome: "TRABALHO DE CONCLUSÃO DE CURSO II",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "MEVA34",
          nome: "OBSTETRÍCIA VETERINÁRIA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "3", numero: "5" },
            { id: "2", numero: "6" },
            { id: "4", numero: "5" },
          ],
        },
        {
          id: "3",
          codigo: "MEVC04",
          nome: "INSPEÇÃO DE PRODUTOS DE ORIGEM ANIMAL",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "5" }],
        },
        {
          id: "4",
          codigo: "MEVC24",
          nome: "SAÚDE AMBIENTAL E CULTURA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
      ],
    },

    {
      numero: "10",
      materias: [
        {
          id: "0",
          codigo: "MEV155",
          nome: "ESTÁGIO SUPERVISIONADO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
      ],
    },
  ],
};
