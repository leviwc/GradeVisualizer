import { GradeState } from "../../components/materia";
export const engenharia_sanitaria = {
  semestre: [
    {
      numero: "1",
      materias: [
        {
          id: "0",
          codigo: "ARQ013",
          nome: "DESCRITIVA I A",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "ENG014",
          nome: "INTRODUCAO A ENGENHARIA AMBIENTAL E SAUDE PUBLICA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "GEO004",
          nome: "GEOLOGIA GERAL I",
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
      ],
    },

    {
      numero: "2",
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
          codigo: "BIO009",
          nome: "BIOLOGIA SANITARIA",
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
          codigo: "QUI029",
          nome: "QUIMICA GERAL",
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
          codigo: "ENG001",
          nome: "MECANICA GERAL I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "2" },
            { id: "3", numero: "2" },
          ],
        },
        {
          id: "1",
          codigo: "ENG128",
          nome: "TOPOGRAFIA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "2" },
            { id: "0", numero: "1" },
            { id: "3", numero: "1" },
          ],
        },
        {
          id: "2",
          codigo: "FIS122",
          nome: "FISICA GERAL E EXPERIMENTAL II-E",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "2" },
            { id: "4", numero: "1" },
          ],
        },
        {
          id: "3",
          codigo: "MATA04",
          nome: "CÁLCULO C",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "2" }],
        },
        {
          id: "4",
          codigo: "MATA07",
          nome: "ÁLGEBRA LINEAR A",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "1" }],
        },
      ],
    },

    {
      numero: "4",
      materias: [
        {
          id: "0",
          codigo: "ENG002",
          nome: "MECANICA GERAL II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "3" }],
        },
        {
          id: "1",
          codigo: "ENG271",
          nome: "QUALIDADE DA AGUA II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "2" }],
        },
        {
          id: "2",
          codigo: "ENG370",
          nome: "FENÔMENOS DE TRANSPORTES I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "3" },
            { id: "3", numero: "3" },
          ],
        },
        {
          id: "3",
          codigo: "FIS123",
          nome: "FÍSICA GERAL E EXPERIMENTAL III-E",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "3" }],
        },
        {
          id: "4",
          codigo: "MAT045",
          nome: "PROCESSAMENTO DE DADOS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "2" }],
        },
        {
          id: "5",
          codigo: "MAT236",
          nome: "MÉTODOS ESTATÍSTICOS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "2" }],
        },
      ],
    },

    {
      numero: "5",
      materias: [
        {
          id: "0",
          codigo: "ECO151",
          nome: "ECONOMIA E FINANÇAS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "5", numero: "4" }],
        },
        {
          id: "1",
          codigo: "ENG060",
          nome: "QUALIDADE DA ÁGUA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "1" },
            { id: "4", numero: "2" },
          ],
        },
        {
          id: "2",
          codigo: "ENG136",
          nome: "HIDRAULICA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "4" },
            { id: "2", numero: "4" },
          ],
        },
        {
          id: "3",
          codigo: "ENG280",
          nome: "BIOLOGIA SANITARIA APLICADA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "4" }],
        },
        {
          id: "4",
          codigo: "ENGN90",
          nome: "Mecânica dos Materiais I-A",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "3" }],
        },
        {
          id: "5",
          codigo: "FIS124",
          nome: "FÍSICA GERAL E EXPERIMENTAL IV-E",
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
          codigo: "ENG003",
          nome: "ELETRICIDADE",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "4" }],
        },
        {
          id: "1",
          codigo: "ENG301",
          nome: "RESISTENCIA DOS MATERIAIS II A",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "5" }],
        },
        {
          id: "2",
          codigo: "ENG352",
          nome: "SANEAMENTO AMBIENTAL",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "5" },
            { id: "2", numero: "5" },
            { id: "1", numero: "4" },
          ],
        },
        {
          id: "3",
          codigo: "ENGA54",
          nome: "MECÂNICA DOS SOLOS I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "4", numero: "5" },
            { id: "2", numero: "1" },
          ],
        },
        {
          id: "4",
          codigo: "MAT174",
          nome: "CÁLCULO NUMÉRICO I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "4", numero: "4" },
            { id: "3", numero: "3" },
            { id: "4", numero: "3" },
          ],
        },
      ],
    },

    {
      numero: "7",
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
          codigo: "ENG016",
          nome: "OPERACOES UNITARIAS FISICO-QUIMICAS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "5" }],
        },
        {
          id: "2",
          codigo: "ENG214",
          nome: "SISTEMAS URBANOS DE ÁGUA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "6" }],
        },
        {
          id: "3",
          codigo: "ENG272",
          nome: "HIDRAULICA II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "5" }],
        },
        {
          id: "4",
          codigo: "ENG274",
          nome: "MATERIAIS DE CONSTRUCAO V",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "3" },
            { id: "4", numero: "2" },
          ],
        },
        {
          id: "5",
          codigo: "ENG298",
          nome: "ESTÁTICA DAS CONSTRUÇÕES",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "6" }],
        },
        {
          id: "6",
          codigo: "ENG371",
          nome: "HIDROLOGIA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "3" },
            { id: "2", numero: "5" },
            { id: "2", numero: "1" },
            { id: "5", numero: "4" },
          ],
        },
      ],
    },

    {
      numero: "8",
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
          codigo: "ENG015",
          nome: "ECOLOGIA APLICADA E CONTROLE DA POLUICAO",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "5" },
            { id: "1", numero: "4" },
          ],
        },
        {
          id: "2",
          codigo: "ENG118",
          nome: "ESTRUTURAS DE CONCRETO ARMADO I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "4", numero: "7" },
            { id: "1", numero: "6" },
          ],
        },
        {
          id: "3",
          codigo: "ENG213",
          nome: "SISTEMAS URBANOS DE ESGOTOS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "6" }],
        },
        {
          id: "4",
          codigo: "ENG275",
          nome: "TRATAMENTO DE ÁGUAS DE ABASTECIMENTO",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "7" },
            { id: "2", numero: "7" },
            { id: "1", numero: "4" },
          ],
        },
        {
          id: "5",
          codigo: "ENG296",
          nome: "CONSTRUCAO CIVIL I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "4", numero: "7" },
            { id: "3", numero: "6" },
          ],
        },
      ],
    },

    {
      numero: "9",
      materias: [
        {
          id: "0",
          codigo: "ENG273",
          nome: "INSTALAÇÕES HIDRÁULICAS SANITÁRIAS E PREDIAIS",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "5" },
            { id: "5", numero: "8" },
          ],
        },
        {
          id: "1",
          codigo: "ENG277",
          nome: "PLANEJAMENTO DE RECURSOS HIDRICOS E CONTROLE DA POLUICAO",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "8" },
            { id: "6", numero: "7" },
          ],
        },
        {
          id: "2",
          codigo: "ENG278",
          nome: "PROBLEMAS DE SAUDE PUBLICA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "6" }],
        },
        {
          id: "3",
          codigo: "ENGL27",
          nome: "TRATAMENTO DE ÁGUAS RESIDUAIS",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "7" },
            { id: "3", numero: "8" },
            { id: "3", numero: "5" },
          ],
        },
      ],
    },

    {
      numero: "10",
      materias: [
        {
          id: "0",
          codigo: "ENG137",
          nome: "OBRAS HIDRÁULICAS",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "5" },
            { id: "4", numero: "7" },
          ],
        },
        {
          id: "1",
          codigo: "ENG281",
          nome: "ORGANIZACAO E ADMINISTRACAO DE SERVICOS DE SANEAMENTO",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "7" },
            { id: "0", numero: "5" },
            { id: "3", numero: "8" },
            { id: "2", numero: "7" },
          ],
        },
        {
          id: "2",
          codigo: "ENG288",
          nome: "ESTÁGIO EM ENGENHARIA SANITÁRIA E AMBIENTAL",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "ENGF13",
          nome: "TRABALHO DE CONCLUSÃO DE CURSO DE ENG. SANITÁRIA E AMBIENTAL",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
      ],
    },
  ],
};
