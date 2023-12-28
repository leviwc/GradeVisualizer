import { GradeState } from "../../components/materia";
export const engenharia_eletrica = {
  semestre: [
    {
      numero: "1",
      materias: [
        {
          id: "0",
          codigo: "ARQ011",
          nome: "DESENHO TECNICO I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "ENG439",
          nome: "INTRODUÇÃO À ENGENHARIA ELÉTRICA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "FIS121",
          nome: "FISICA GERAL E EXPERIMENTAL I-E",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "MATA01",
          nome: "GEOMETRIA ANALÍTICA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "MATA02",
          nome: "CÁLCULO A",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "5",
          codigo: "QUI029",
          nome: "QUIMICA GERAL",
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
          codigo: "ENGC26",
          nome: "SISTEMAS LÓGICOS",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "ENGC28",
          nome: "LABORATÓRIO INTEGRADO I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "ENGC29",
          nome: "METODOLOGIA E EXPRESSÃO DO CONHECIMENTO CIENTÍFICO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "FIS122",
          nome: "FISICA GERAL E EXPERIMENTAL II-E",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "1" },
            { id: "3", numero: "1" },
            { id: "4", numero: "1" },
          ],
        },
        {
          id: "4",
          codigo: "MAT045",
          nome: "PROCESSAMENTO DE DADOS",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "5",
          codigo: "MATA03",
          nome: "CÁLCULO B",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "3", numero: "1" },
            { id: "4", numero: "1" },
          ],
        },
        {
          id: "6",
          codigo: "MATA07",
          nome: "ÁLGEBRA LINEAR A",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "1" }],
        },
      ],
    },

    {
      numero: "3",
      materias: [
        {
          id: "0",
          codigo: "ENGA47",
          nome: "TECNOLOGIA DOS MATERIAIS PARA A ENGENHARIA ELÉTRICA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "3", numero: "2" },
            { id: "5", numero: "1" },
          ],
        },
        {
          id: "1",
          codigo: "ENGC30",
          nome: "MECÂNICA DOS SÓLIDOS",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "1" },
            { id: "5", numero: "2" },
          ],
        },
        {
          id: "2",
          codigo: "ENGC32",
          nome: "ANÁLISE DE CIRCUITOS I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "5", numero: "2" },
            { id: "6", numero: "2" },
          ],
        },
        {
          id: "3",
          codigo: "ENGC37",
          nome: "LABORATÓRIO INTEGRADO II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "2" }],
        },
        {
          id: "4",
          codigo: "FIS123",
          nome: "FÍSICA GERAL E EXPERIMENTAL III-E",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "3", numero: "2" },
            { id: "5", numero: "2" },
          ],
        },
        {
          id: "5",
          codigo: "MATA04",
          nome: "CÁLCULO C",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "5", numero: "2" }],
        },
        {
          id: "6",
          codigo: "MATA06",
          nome: "CÁLCULO E",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "5", numero: "2" },
            { id: "6", numero: "2" },
          ],
        },
      ],
    },

    {
      numero: "4",
      materias: [
        {
          id: "0",
          codigo: "ENG370",
          nome: "FENÔMENOS DE TRANSPORTES I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "3", numero: "2" },
            { id: "5", numero: "3" },
          ],
        },
        {
          id: "1",
          codigo: "ENGC24",
          nome: "SINAIS E SISTEMAS I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "3" },
            { id: "5", numero: "3" },
          ],
        },
        {
          id: "2",
          codigo: "ENGC25",
          nome: "ANALISE DE CIRCUITOS II",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "3" },
            { id: "4", numero: "3" },
            { id: "5", numero: "3" },
          ],
        },
        {
          id: "3",
          codigo: "ENGC38",
          nome: "LABORATÓRIO INTEGRADO III",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "3" }],
        },
        {
          id: "4",
          codigo: "ENGC40",
          nome: "ELETRÔNICA DIGITAL",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "2" },
            { id: "4", numero: "2" },
          ],
        },
        {
          id: "5",
          codigo: "ENGC41",
          nome: "DISPOSITIVOS ELETRÔNICOS",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "3" },
            { id: "2", numero: "3" },
          ],
        },
        {
          id: "6",
          codigo: "FIS124",
          nome: "FÍSICA GERAL E EXPERIMENTAL IV-E",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "3" }],
        },
      ],
    },

    {
      numero: "5",
      materias: [
        {
          id: "0",
          codigo: "ENGC33",
          nome: "SINAIS E SISTEMAS II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "4" }],
        },
        {
          id: "1",
          codigo: "ENGC34",
          nome: "ELETROMAGNETISMO APLICADO",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "6", numero: "4" },
            { id: "6", numero: "3" },
          ],
        },
        {
          id: "2",
          codigo: "ENGC39",
          nome: "LABORATÓRIO INTEGRADO IV",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "4" }],
        },
        {
          id: "3",
          codigo: "ENGC50",
          nome: "SISTEMAS MICROPROCESSADOS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "4" }],
        },
        {
          id: "4",
          codigo: "ENGC51",
          nome: "ELETRÔNICA ANALÓGICA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "4" },
            { id: "2", numero: "4" },
            { id: "5", numero: "4" },
          ],
        },
        {
          id: "5",
          codigo: "MAT174",
          nome: "CÁLCULO NUMÉRICO I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "4", numero: "2" },
            { id: "5", numero: "3" },
          ],
        },
        {
          id: "6",
          codigo: "MAT236",
          nome: "MÉTODOS ESTATÍSTICOS",
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
          codigo: "ENGC27",
          nome: "SISTEMAS DE COMUNICAÇÕES I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "4" },
            { id: "2", numero: "4" },
            { id: "5", numero: "4" },
            { id: "6", numero: "5" },
          ],
        },
        {
          id: "1",
          codigo: "ENGC31",
          nome: "TERMODINÂMICA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "3", numero: "2" },
            { id: "5", numero: "3" },
          ],
        },
        {
          id: "2",
          codigo: "ENGC35",
          nome: "MODELAGEM E ANÁLISE DE SISTEMAS DINÂMICOS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "5" }],
        },
        {
          id: "3",
          codigo: "ENGC36",
          nome: "DISPOSITIVOS DE CONVERSÃO ELETROMECÂNICA I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "4" },
            { id: "4", numero: "3" },
          ],
        },
        {
          id: "4",
          codigo: "ENGC44",
          nome: "SISTEMAS DE POTÊNCIA I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "4" }],
        },
        {
          id: "5",
          codigo: "ENGC46",
          nome: "SÍNTESE DE CIRCUITOS",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "4" },
            { id: "2", numero: "4" },
          ],
        },
        {
          id: "6",
          codigo: "ENGC53",
          nome: "LABORATORIO INTEGRADO V",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "5" }],
        },
      ],
    },

    {
      numero: "7",
      materias: [
        {
          id: "0",
          codigo: "ENG269",
          nome: "CIÊNCIAS DO AMBIENTE",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "ENG295",
          nome: "HIGIENE E SEGURANÇA NO TRABALHO",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "3", numero: "2" },
            { id: "5", numero: "1" },
          ],
        },
        {
          id: "2",
          codigo: "ENGC42",
          nome: "SISTEMAS DE CONTROLE I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "6" }],
        },
        {
          id: "3",
          codigo: "ENGC43",
          nome: "DISPOSITIVOS DE CONVERSÃO ELETROMECÂNICA II",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "6" },
            { id: "2", numero: "6" },
            { id: "3", numero: "6" },
          ],
        },
        {
          id: "4",
          codigo: "ENGC47",
          nome: "TRANSMISSÃO E DISTRIBUIÇÃO DE ENERGIA ELÉTRICA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "5" },
            { id: "3", numero: "6" },
            { id: "4", numero: "6" },
          ],
        },
        {
          id: "5",
          codigo: "ENGC49",
          nome: "MEDIÇÃO DE GRANDEZAS FÍSICAS",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "4" },
            { id: "0", numero: "5" },
            { id: "1", numero: "5" },
            { id: "4", numero: "5" },
          ],
        },
        {
          id: "6",
          codigo: "ENGC54",
          nome: "LABORATORIO INTEGRADO VI",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "6", numero: "6" }],
        },
      ],
    },

    {
      numero: "8",
      materias: [
        {
          id: "0",
          codigo: "ADM012",
          nome: "ADMINISTRACAO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "ENGC45",
          nome: "INSTALAÇÕES E EQUIPAMENTOS ELETRICOS I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "5" },
            { id: "3", numero: "7" },
            { id: "4", numero: "6" },
          ],
        },
        {
          id: "2",
          codigo: "ENGC48",
          nome: "ELETRÔNICA DE POTÊNCIA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "3", numero: "7" },
            { id: "4", numero: "5" },
          ],
        },
        {
          id: "3",
          codigo: "ENGC52",
          nome: "GERAÇÃO DE ENERGIA ELETRICA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "3", numero: "7" },
            { id: "4", numero: "6" },
          ],
        },
        {
          id: "4",
          codigo: "ENGC55",
          nome: "LABORATORIO INTEGRADO VII",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "6", numero: "7" }],
        },
      ],
    },

    {
      numero: "9",
      materias: [
        {
          id: "0",
          codigo: "DIR175",
          nome: "LEGISLAÇÃO SOCIAL",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "ECOB40",
          nome: "INTRODUÇÃO À ECONOMIA I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "6", numero: "5" }],
        },
        {
          id: "2",
          codigo: "ENGC57",
          nome: "ESTAGIO CURRICULAR EM ENGENHARIA ELETRICA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "6" },
            { id: "1", numero: "5" },
            { id: "2", numero: "7" },
            { id: "3", numero: "7" },
            { id: "4", numero: "7" },
            { id: "3", numero: "5" },
            { id: "4", numero: "5" },
          ],
        },
        {
          id: "3",
          codigo: "ENGN95",
          nome: "PROJETO DE CONCLUSÃO DE CURSO",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "1" },
            { id: "0", numero: "4" },
            { id: "1", numero: "1" },
            { id: "2", numero: "2" },
            { id: "1", numero: "3" },
            { id: "0", numero: "5" },
            { id: "1", numero: "5" },
            { id: "2", numero: "5" },
            { id: "3", numero: "5" },
            { id: "4", numero: "5" },
            { id: "5", numero: "5" },
            { id: "6", numero: "5" },
          ],
        },
      ],
    },

    {
      numero: "10",
      materias: [
        {
          id: "0",
          codigo: "ENGN96",
          nome: "TRABALHO DE CONCLUSÃO DE CURSO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "9" }],
        },
      ],
    },
  ],
};
