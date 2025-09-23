'use client'

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'

import { postsApi } from '@/api/posts'

export default function Guestbook() {
  const qc = useQueryClient()

  const postsParams = { page: 1, limit: 100 }
  const POSTS_KEY = ['posts', postsParams]

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [tagsInput, setTagsInput] = useState('')
  const [clientError, setClientError] = useState('')

  const resetForm = () => {
    setTitle('')
    setBody('')
    setTagsInput('')
    setClientError('')
  }

  const { data, isLoading, isError, error } = useQuery<any[]>({
    queryKey: ['posts', postsParams],
    queryFn: () => postsApi.list(postsParams),
    placeholderData: (prev) => prev,
    staleTime: 30_000,
  })

  const createPost = useMutation({
    mutationKey: ['post-create'],
    mutationFn: (payload: any) => postsApi.create(payload),
    onMutate: async (payload) => {
      setClientError('')
      await qc.cancelQueries({ queryKey: ['posts'] })
      const prevData = qc.getQueryData(POSTS_KEY)

      const tempId = ''
      const tempPost: any = {
        _id: tempId,
        title: payload.title,
        body: payload.body,
        tags: payload.tags,
        createdAt: new Date().toISOString(),
      }

      qc.setQueryData(POSTS_KEY, (prev: any[] | undefined) => {
        if (!prev) {
          return [tempPost]
        }
        return [tempPost, ...prev]
      })
      resetForm()

      return { prevData, tempId }
    },
    onError: (err: any, _payload, ctx) => {
      if (ctx?.prevData) {
        qc.setQueryData(POSTS_KEY, ctx.prevData)
      }
      setClientError(err?.message || '작성 실패')
    },
    onSuccess: (res: any, _payload, ctx) => {
      qc.setQueryData(POSTS_KEY, (prev: any[] | undefined) => {
        if (!prev) {
          return prev
        }
        return prev.map((p) => (p._id === ctx?.tempId ? res : p))
      })
    },
    onSettled: () => {
      qc.invalidateQueries({ queryKey: ['posts'] })
    },
  })

  const deletePost = useMutation({
    mutationKey: ['post-delete'],
    mutationFn: (id: string) => postsApi.remove(id),
    onMutate: async (id) => {
      await qc.cancelQueries({ queryKey: ['posts'] })
      const prevData = qc.getQueryData(POSTS_KEY)
      qc.setQueryData(POSTS_KEY, (prev: any[] | undefined) => {
        if (!prev) {
          return prev
        }
        return prev.filter((p) => p._id !== id)
      })
      return { prevData }
    },
    onError: (_err, _id, ctx) => {
      if (ctx?.prevData) {
        qc.setQueryData(POSTS_KEY, ctx.prevData)
      }
    },
    onSettled: () => {
      qc.invalidateQueries({ queryKey: ['posts'] })
    },
  })

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!title.trim()) {
      setClientError('제목은 필수입니다.')
      return
    }

    const tags = [
      ...new Set(
        tagsInput
          .split(',')
          .map((s) => s.trim())
          .filter(Boolean)
      ),
    ]

    createPost.mutate({ title: title.trim(), body, tags })
  }

  return (
    <div className="mx-auto max-w-3xl p-4">
      <div className="mb-4 rounded-2xl bg-white p-6 shadow-xl">
        <h1 className="mb-4 text-2xl font-bold">방명록</h1>

        <form onSubmit={onSubmit} className="grid gap-3" noValidate>
          <label className="grid gap-2 text-sm">
            제목
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              disabled={createPost.isPending}
              className="h-11 w-full rounded-xl border border-slate-200 px-3 outline-none focus:border-slate-400 disabled:bg-slate-100"
              placeholder="제목을 입력하세요"
            />
          </label>

          <label className="grid gap-2 text-sm">
            본문
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              disabled={createPost.isPending}
              rows={6}
              className="w-full rounded-xl border border-slate-200 p-3 outline-none focus:border-slate-400 disabled:bg-slate-100"
              placeholder="내용을 작성하세요"
            />
          </label>

          <label className="grid gap-2 text-sm">
            태그 (쉼표로 구분)
            <input
              value={tagsInput}
              onChange={(e) => setTagsInput(e.target.value)}
              disabled={createPost.isPending}
              className="h-11 w-full rounded-xl border border-slate-200 px-3 outline-none focus:border-slate-400 disabled:bg-slate-100"
              placeholder="react, mongo, query"
            />
          </label>

          {clientError && (
            <p className="rounded-lg border border-red-200 bg-red-50 p-2 text-sm text-red-700">
              {clientError}
            </p>
          )}

          <button
            type="submit"
            disabled={createPost.isPending}
            className="h-11 rounded-xl bg-slate-900 font-semibold text-white hover:bg-slate-800 disabled:opacity-60"
          >
            {createPost.isPending ? '등록 중…' : '등록'}
          </button>
        </form>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow-xl">
        <h2 className="mb-4 text-xl font-semibold">피드</h2>

        {isLoading && <p>불러오는 중…</p>}
        {isError && (
          <p className="rounded-lg border border-red-200 bg-red-50 p-2 text-sm text-red-700">
            {error?.message || '불러오기 실패'}
          </p>
        )}

        {data?.length ? (
          <ul className="space-y-3">
            {data.map((p: any) => (
              <li key={p._id} className="rounded-xl border border-slate-200 p-4">
                <div className="mb-2 flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <button
                    onClick={() => {
                      if (confirm('정말 삭제하시겠습니까?')) {
                        deletePost.mutate(p._id)
                      }
                    }}
                    disabled={deletePost.isPending}
                    className="rounded-lg border px-3 py-1 text-red-600 hover:bg-red-50 disabled:opacity-60"
                  >
                    {deletePost.isPending ? '삭제 중…' : '삭제'}
                  </button>
                </div>

                <div className="text-sm text-slate-700 whitespace-pre-wrap">{p.body}</div>

                {!!p.tags?.length && (
                  <div className="mt-2 flex flex-wrap gap-2 text-xs">
                    {(p.tags ?? []).map((t: string, i: number) => (
                      <span
                        key={`${t}-${i}`}
                        className="rounded-full border border-slate-200 px-2 py-1"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        ) : (
          !isLoading && <p className="text-slate-500">아직 작성된 글이 없습니다.</p>
        )}
      </div>
    </div>
  )
}