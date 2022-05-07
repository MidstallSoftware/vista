load('ext://deployment', 'deployment_create')
load('ext://restart_process', 'docker_build_with_restart')

docker_build_with_restart('ghcr.io/midstallsoftware/vista', '.', 'node playground/.output/server/index.mjs', live_update=[
  sync('.', '/usr/src/server'),
  run('npm i', trigger='package.json'),
  run('npm run stubs'),
  run('npm run build'),
  run('npm run playground:build')
], extra_tag='master')

k8s_yaml('./kube/deploy.yml')
k8s_yaml('./kube/service.yml')

k8s_resource(workload='midstall-vista', port_forwards=3000)