<template>
    <div class="graphql-demo">
        <h1>GraphQL Demo</h1>
        <ApolloQuery
                :query="require('../graphql/HelloWorld.graphql')"
                :variables="{ name }"
        >
            <template slot-scope="{ result: { loading, error, data } }">
                <!-- Loading -->
                <div v-if="loading" class="loading apollo"></div>

                <!-- Error -->
                <div v-else-if="error" class="error apollo">An error occurred</div>

                <!-- Result -->
                <div v-else-if="data" class="result apollo">{{ data.hello }}</div>

                <!-- No result -->
                <div v-else class="no-result apollo">No result :(</div>
            </template>
        </ApolloQuery>
    </div>
</template>

<script>
    export default {
        name: "GraphQLDemo",
        data () {
            return {
                name: 'Hendrik',
                newMessage: '',
            }
        },
    }
</script>

<style scoped>

</style>