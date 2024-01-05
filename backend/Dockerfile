FROM --platform=linux/amd64 rust:1.71.1 as builder

WORKDIR /builder

COPY . .

RUN cargo build --release

FROM gcr.io/distroless/cc

COPY --from=builder /builder/target/release/backend /

EXPOSE 50052

CMD ["./backend"]