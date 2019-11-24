CREATE TABLE test.pizza
(
    id uuid,
    description text,
    PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;
