<template>
    <div class="p-6">
        <div class="overflow-x-auto">
            <table class="min-w-full">
                <thead>
                    <tr>
                        <th class="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Move</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(move, index) in moves" :key="index">
                        <td v-if="move.hasOwnProperty('move')" :class="{'bg-gray-100 px-6 py-4 whitespace-no-wrap':index % 2 === 1, 'px-6 py-4 whitespace-no-wrap':index %2 ===0}">
                            <p class="text-sm leading-5 font-medium">{{ capitalize(move.move.name) }}</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script setup>
import { capitalize } from '../constantes';
const props = defineProps({ moves: {} })
</script>
