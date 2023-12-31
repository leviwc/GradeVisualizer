import { GradeState } from "../../components/materia";
export const engenharia_de_petroleo = {
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
          codigo: "ENGR11",
          nome: "INTRODUÇÃO À ENGENHARIA DE PETRÓLEO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "GEOA43",
          nome: "GEOLOGIA BÁSICA",
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
          codigo: "MATA37",
          nome: "INTRODUÇÃO À LÓGICA DE PROGRAMAÇÃO",
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
          codigo: "FISD36",
          nome: "FÍSICA GERAL TEÓRICA I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "1" }],
        },
        {
          id: "1",
          codigo: "FISD42",
          nome: "FÍSICA GERAL EXPERIMENTAL I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "1" }],
        },
        {
          id: "2",
          codigo: "GEO204",
          nome: "SEDIMENTOLOGIA E ESTRATIGRAFIA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "1" }],
        },
        {
          id: "3",
          codigo: "MATA03",
          nome: "CÁLCULO B",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "3", numero: "1" },
            { id: "4", numero: "1" },
          ],
        },
        {
          id: "4",
          codigo: "MATA07",
          nome: "ÁLGEBRA LINEAR A",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "1" }],
        },
        {
          id: "5",
          codigo: "QUIA27",
          nome: "QUÍMICA FUNDAMENTAL I",
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
          codigo: "ENGP82",
          nome: "ESTÁTICA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "2" }],
        },
        {
          id: "1",
          codigo: "FISD34",
          nome: "FÍSICA GERAL TEÓRICA II",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "2" },
            { id: "3", numero: "2" },
          ],
        },
        {
          id: "2",
          codigo: "FISD41",
          nome: "FÍSICA GERAL EXPERIMENTAL II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "2" }],
        },
        {
          id: "3",
          codigo: "GEOE54",
          nome: "GEOLOGIA ESTRUTURAL",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "1" }],
        },
        {
          id: "4",
          codigo: "MAT236",
          nome: "MÉTODOS ESTATÍSTICOS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "2" }],
        },
        {
          id: "5",
          codigo: "MATA04",
          nome: "CÁLCULO C",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "2" }],
        },
        {
          id: "6",
          codigo: "QUIC92",
          nome: "FÍSICO-QUÍMICA PARA ENGENHARIA DO PETRÓLEO",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "3", numero: "2" },
            { id: "5", numero: "2" },
          ],
        },
      ],
    },

    {
      numero: "4",
      materias: [
        {
          id: "0",
          codigo: "ENG360",
          nome: "MATERIAIS DE CONSTRUCAO E QUIPAMENTOS DA INDUSTRIA QUIMICA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "ENG370",
          nome: "FENÔMENOS DE TRANSPORTES I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "2" },
            { id: "3", numero: "2" },
          ],
        },
        {
          id: "2",
          codigo: "ENGC30",
          nome: "MECÂNICA DOS SÓLIDOS",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "FISD37",
          nome: "FÍSICA GERAL TEÓRICA III",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "3" }],
        },
        {
          id: "4",
          codigo: "FISD40",
          nome: "FÍSICA GERAL EXPERIMENTAL III",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "3" }],
        },
        {
          id: "5",
          codigo: "MAT174",
          nome: "CÁLCULO NUMÉRICO I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "5", numero: "3" },
            { id: "4", numero: "2" },
            { id: "5", numero: "1" },
          ],
        },
      ],
    },

    {
      numero: "5",
      materias: [
        {
          id: "0",
          codigo: "ENG003",
          nome: "ELETRICIDADE",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "4" }],
        },
        {
          id: "1",
          codigo: "ENG309",
          nome: "FENOMENOS DE TRANSPORTE III",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "4" }],
        },
        {
          id: "2",
          codigo: "ENG323",
          nome: "TERMODINÂMICA APLICADA I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "6", numero: "3" }],
        },
        {
          id: "3",
          codigo: "ENGM89",
          nome: "MECÂNICA DAS ROCHAS PARA PETRÓLEO",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "4" },
            { id: "3", numero: "3" },
            { id: "5", numero: "4" },
          ],
        },
        {
          id: "4",
          codigo: "ENGR12",
          nome: "PROPRIEDADES DOS FLUÍDOS E ROCHA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "1" },
            { id: "6", numero: "3" },
          ],
        },
        {
          id: "5",
          codigo: "GEOE58",
          nome: "GEOFÍSICA APLICADA À ENGENHARIA DO PETRÓLEO",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "3", numero: "4" },
            { id: "4", numero: "4" },
            { id: "2", numero: "1" },
          ],
        },
      ],
    },

    {
      numero: "6",
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
          codigo: "ENGR13",
          nome: "ENGENHARIA DE PERFURAÇÃO I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "4" },
            { id: "3", numero: "5" },
            { id: "1", numero: "1" },
          ],
        },
        {
          id: "2",
          codigo: "ENGR15",
          nome: "ENGENHARIA DE RESERVATÓRIOS I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "4" },
            { id: "4", numero: "5" },
          ],
        },
        {
          id: "3",
          codigo: "ENGR17",
          nome: "FLUÍDOS DE PERFURAÇÃO E COMPLETAÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "4" },
            { id: "1", numero: "1" },
          ],
        },
        {
          id: "4",
          codigo: "ENGR19",
          nome: "ESCOAMENTO MULTIFÁSICO DE PETRÓLEO",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "5" },
            { id: "1", numero: "4" },
            { id: "5", numero: "4" },
          ],
        },
        {
          id: "5",
          codigo: "GEO222",
          nome: "GEOLOGIA DO PETROLEO I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "2" },
            { id: "3", numero: "3" },
          ],
        },
      ],
    },

    {
      numero: "7",
      materias: [
        {
          id: "0",
          codigo: "ENGD06",
          nome: "ENGENHARIA ECONÔMICA E GESTÃO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "3" }],
        },
        {
          id: "1",
          codigo: "ENGR14",
          nome: "ENGENHARIA DE PERFURAÇÃO II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "6" }],
        },
        {
          id: "2",
          codigo: "ENGR16",
          nome: "ENGENHARIA DE RESERVATÓRIOS II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "6" }],
        },
        {
          id: "3",
          codigo: "ENGR18",
          nome: "ENGENHARIA DE COMPLETAÇÃO DE POÇOS",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "6" },
            { id: "3", numero: "6" },
          ],
        },
        {
          id: "4",
          codigo: "ENGR20",
          nome: "ELEVAÇÃO ARTIFICIAL",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "6" }],
        },
        {
          id: "5",
          codigo: "GEOE59",
          nome: "PERFILAGEM GEOFÍSICA DE POÇOS PARA ENGENHARIA DE PETRÓLEO",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "5", numero: "6" },
            { id: "5", numero: "5" },
          ],
        },
      ],
    },

    {
      numero: "8",
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
          codigo: "ENGM90",
          nome: "PROCESSAMENTO PRIMÁRIO DE PETRÓLEO",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "5" },
            { id: "1", numero: "4" },
          ],
        },
        {
          id: "2",
          codigo: "ENGR21",
          nome: "SIMULAÇÃO NUMÉRICA DE RESERVATÓRIOS",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "7" },
            { id: "5", numero: "4" },
          ],
        },
        {
          id: "3",
          codigo: "ENGR22",
          nome: "AVALIAÇÃO DE FORMAÇÕES",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "6" }],
        },
        {
          id: "4",
          codigo: "ENGR24",
          nome: "GESTÃO AMBIENTAL NA ENGENHARIA DE PETRÓLEO",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "7" },
            { id: "4", numero: "7" },
          ],
        },
        {
          id: "5",
          codigo: "Sem.",
          nome: "",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "6",
          codigo: "ENGR25",
          nome: "ESTÁGIO CURRICULAR EM ENGENHARIA DE PETRÓLEO",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "6" },
            { id: "2", numero: "6" },
            { id: "3", numero: "6" },
            { id: "4", numero: "6" },
            { id: "5", numero: "6" },
            { id: "5", numero: "5" },
          ],
        },
        {
          id: "7",
          codigo: "ENGR26",
          nome: "TRABALHO DE CONCLUSÃO DE CURSO EM ENGENHARIA DE PETRÓLEO",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "1" },
            { id: "0", numero: "6" },
            { id: "0", numero: "5" },
            { id: "0", numero: "8" },
            { id: "1", numero: "5" },
            { id: "2", numero: "5" },
            { id: "0", numero: "4" },
            { id: "1", numero: "4" },
            { id: "0", numero: "7" },
            { id: "3", numero: "5" },
            { id: "0", numero: "3" },
            { id: "1", numero: "1" },
            { id: "4", numero: "5" },
            { id: "1", numero: "6" },
            { id: "1", numero: "7" },
            { id: "2", numero: "6" },
            { id: "2", numero: "7" },
            { id: "3", numero: "6" },
            { id: "3", numero: "7" },
            { id: "4", numero: "6" },
            { id: "4", numero: "7" },
            { id: "2", numero: "8" },
            { id: "3", numero: "8" },
            { id: "4", numero: "8" },
            { id: "1", numero: "3" },
            { id: "0", numero: "2" },
            { id: "3", numero: "4" },
            { id: "4", numero: "4" },
            { id: "1", numero: "2" },
            { id: "2", numero: "2" },
            { id: "5", numero: "6" },
            { id: "2", numero: "1" },
            { id: "3", numero: "3" },
            { id: "5", numero: "5" },
            { id: "5", numero: "7" },
            { id: "5", numero: "4" },
            { id: "4", numero: "3" },
            { id: "3", numero: "1" },
            { id: "4", numero: "1" },
            { id: "3", numero: "2" },
            { id: "5", numero: "3" },
            { id: "4", numero: "2" },
            { id: "5", numero: "1" },
            { id: "5", numero: "2" },
            { id: "6", numero: "3" },
          ],
        },
      ],
    },
  ],
};
