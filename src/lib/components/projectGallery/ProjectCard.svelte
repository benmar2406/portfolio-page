<script>
    let { project } = $props()
</script>


<a class="card" href={`/portfolio/${project.slug}`}>
    <img src={project.image} alt={project.title} />
    <div class="overlay">
        <h2>{project.title}</h2>
    </div>
</a>
