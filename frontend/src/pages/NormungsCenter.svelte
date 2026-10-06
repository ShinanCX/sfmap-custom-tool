<!-- TODO: Create a Page for the standards established -->
 <!-- TODO: Create a Page for the Project Planner -->
<script lang="ts">
    import { factory, nodes, status, sink, series } from '../lib/api';
    import { toMap } from '../lib/router';
    import { fmtNum, fmtMW, STATE_COLOR, machineColor, C, dur, ago, purityRank, purityLabel } from '../lib/fmt';
    import type { Node } from '../lib/types';
    import LineChart from '../lib/LineChart.svelte';
    import Segmented from '../lib/Segmented.svelte';
    import { matches } from '../lib/fuzzy';
    import { tn, both } from '../lib/names';
    import { t, tr, lx, locale } from '../lib/i18n';
  
  
  </script>